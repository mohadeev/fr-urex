import React, { useState, useEffect, useRef } from "react";
import Style from "../../../styles/pages/create-new-tour.module.css";

import { useSelector } from "react-redux";
import basedPostUrlRequest from "../../../utils/basedPostUrlRequest";
import { ButtonCircul, SubmiteButton } from "../../modals/Buttons";
import { InputStart, TextEreaStart } from "../../modals/Inputs";
import { BarValue } from "../../modals/BarValue";
import { Image100 } from "../../modals/Images";
import ImgesUploader from "../../modals/ImgesUploader";
import { IoAddOutline } from "@react-icons/all-files/io5/IoAddOutline";
import { useRouter } from "next/router";
type MyType = {
  // name: string;
  // descreption: string;
  // index: number;
};

const AddTourDays = () => {
  const Router = useRouter();
  const [addATour, setAddATour] = useState(false);
  const [days, setDays] = useState<any[]>([]);

  const [dayName, setDayName] = useState("");
  const [indexed, setIndexed] = useState(-1);

  const [descreption, setDescreption] = useState("");
  const end = useSelector((state: any) => state.tourSlice.end);
  const start = useSelector((state: any) => state.tourSlice.start);
  const name: any = useSelector((state: any) => state.tourSlice.title);
  const overview: any = useSelector((state: any) => state.tourSlice.overview);

  const BarsElement = useRef<HTMLDivElement>(null);

  const addOneMoreDay = () => {
    if (indexed < 0) {
      setAddATour(true);
    }
  };
  const submiteDay = () => {
    setAddATour(false);
    setDays([...days, { name: dayName, descreption: descreption }]);
    setDescreption("");
    setDayName("");
  };

  const [addIamges, setAddIamges] = useState(false);
  const images100: any = useSelector(
    (state: any) => state.imageSlice.images100
  );

  const HandelChangeDayName = (e: any) => {
    setDayName(e.target.value);
  };
  const HandelChangeDescreption = (e: any) => {
    setDescreption(e.target.value);
  };
  const handelSecondStep = () => {
    setAddIamges(true);
  };
  const price = "";
  const handelCreateTour = async () => {
    const body: any = {
      name: name,
      overview,
      start: start,
      end: end,
      price,
      days,
      images: images100,
    };
    await basedPostUrlRequest("/api/post/tour/create-new-tour", body).then(
      (res: any) => {
        Router.reload();
        console.log(res);
      }
    );
  };
  const HandelRemoveBarValue = (index: number) => {
    if (index >= 0) {
      setDays(days.splice(1, index));
      setAddATour(false);
    }
  };
  const HandelEditBarValue = (itemIndex: number) => {
    setIndexed(itemIndex);
    setAddATour(true);
  };
  const HandelEditDay = (itemIndex: number) => {
    if (itemIndex == indexed) {
      const editData = days[itemIndex];
      const EditHandelChangeDayName = (e: any) => {
        setDays(
          days.map((obj, index) => {
            if (itemIndex == index) {
              obj.name = e.target.value;
              return obj;
            } else {
              return obj;
            }
          })
        );
      };
      const EditHandelChangeDayDesc = (e: any) => {
        setDays(
          days.map((obj, index) => {
            if (itemIndex == index) {
              obj.descreption = e.target.value;
              return obj;
            } else {
              return obj;
            }
          })
        );
      };
      const submiteEditdDay = () => {
        setDays(days);
        setIndexed(-1);
        setAddATour(false);
      };
      if (indexed >= 0) {
        return (
          <>
            <InputStart
              HandelChange={EditHandelChangeDayName}
              TextTop={"Title"}
              PlaceHolder={"title"}
              DefaultValueInput={editData?.name}
            />

            <TextEreaStart
              HandelChange={EditHandelChangeDayDesc}
              TextTop={"Descreption"}
              PlaceHolder={"descreption"}
              DefaultValueTextArea={editData?.descreption}
            />
            <SubmiteButton HandelClick={submiteEditdDay} />
          </>
        );
      } else {
        return <></>;
      }
    }
  };

  return (
    <div className={Style.container}>
      <div ref={BarsElement}>
        {days.length
          ? days.map((tor: any, index: number) => (
              <div>
                <BarValue
                  key={index}
                  HandelRemoveBarValue={() => HandelRemoveBarValue(index)}
                  HandelEditBarValue={() => HandelEditBarValue(index)}
                  Value={tor?.name}
                />
                {HandelEditDay(index)}
              </div>
            ))
          : null}
      </div>

      {addATour && indexed < 0 && (
        <div className={Style.container_add_tour}>
          <InputStart
            HandelChange={HandelChangeDayName}
            TextTop={"Title"}
            PlaceHolder={"title "}
          />

          <TextEreaStart
            HandelChange={HandelChangeDescreption}
            TextTop={"Descreption"}
            PlaceHolder={"descreption"}
          />
        </div>
      )}

      {addATour && indexed < 0 && (
        <SubmiteButton Icon={<IoAddOutline />} HandelClick={submiteDay} />
      )}
      {!addATour && indexed < 0 && <ButtonCircul HandelClick={addOneMoreDay} />}

      {!addATour && !addIamges && days.length ? (
        <SubmiteButton TextSubmite="continue" HandelClick={handelSecondStep} />
      ) : null}
      {addIamges && (
        <>
          <ImgesUploader />
          {images100?.length
            ? images100.map((filename: any) => <Image100 Bg={filename} />)
            : null}
          <SubmiteButton TextSubmite="Finish" HandelClick={handelCreateTour} />
        </>
      )}
    </div>
  );
};

export default AddTourDays;
