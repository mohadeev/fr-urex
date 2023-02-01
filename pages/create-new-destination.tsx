import React, { useState, useEffect } from "react";
import { InputStart, TextEreaStart } from "../components/modals/Inputs";
import Style from "../styles/pages/create-new-tour.module.css";
import { DropDown } from "../components/modals/DropDown";
import { BarValue } from "../components/modals/BarValue";
import { ButtonCircul, SubmiteButton } from "../components/modals/Buttons";
import { useSelector } from "react-redux";
import basedPostUrlRequest from "../utils/basedPostUrlRequest";
import ImgesUploader from "../components/modals/ImgesUploader";
import { Image100 } from "../components/modals/Images";
type MyType = {
  name: string;
  description: string;
};

interface tourrr {
  name: string;
  overview: string;
  images: [];
}
interface tourrr {}
const createNewTour = () => {
  const tour: tourrr[] = [
    {
      name: "",
      overview: "",
      images: [],
    },
  ];
  const [name, setName] = useState(tour[0].name);
  const [description, setdescription] = useState("");

  const [addIamges, setAddIamges] = useState(false);
  const images100: any = useSelector(
    (state: any) => state.imageSlice.images100
  );
  //df

  const HandelChangeTitle = (e: any) => {
    setName(e.target.value);
  };

  const HandelChangedescription = (e: any) => {
    setdescription(e.target.value);
  };
  const handelCreateTour = async () => {
    setAddIamges(true);
  };
  const handelFinishTour = async () => {
    const body: any = { name: name, description, images: images100 };
    console.log(body);
    await basedPostUrlRequest(
      "/api/post/destination/create-new-destination",
      body
    ).then((res: any) => {});
    setAddIamges(false);
  };
  return (
    <div className={Style.container}>
      {!addIamges ? (
        <>
          <InputStart
            HandelChange={HandelChangeTitle}
            TextTop={"Destination Name"}
            PlaceHolder={"Destination Name"}
          />

          <TextEreaStart
            HandelChange={HandelChangedescription}
            TextTop={"description"}
            PlaceHolder={"description"}
          />
          <SubmiteButton
            TextSubmite="continue"
            HandelClick={handelCreateTour}
          />
        </>
      ) : (
        <>
          <ImgesUploader />
          {images100?.length
            ? images100.map((filename: any) => <Image100 Bg={filename} />)
            : null}
          <SubmiteButton TextSubmite="Finish" HandelClick={handelFinishTour} />
        </>
      )}
    </div>
  );
};

export default createNewTour;
