import React, { useState, useEffect } from "react";
import Style from "../../styles/modals/dropdown.module.css";
import { IoMailOpenOutline } from "@react-icons/all-files/io5/IoMailOpenOutline";
import { useDispatch } from "react-redux";
import { tourDataHandler } from "../../redux/tour-slice/tourSlice";
import { ParagraphsP } from "./NormalText";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";

export const DropDown = ({
  TextDown,
  PlaceHolder,
  TextTop,
  DropDownArray,
  MessageRedux,
}: any) => {
  const dispatch = useDispatch();
  const HandelClick = () => {
    setIsDropDown(true);
  };
  const HandelClickChange = (itemId: string, Name: string) => {
    setValue(Name);
    dispatch(
      tourDataHandler({
        message: MessageRedux,
        paylaod: { id: itemId, name: Name },
      })
    );
    setIsDropDown(false);
  };
  const [value, setValue] = useState<string>("");
  const [isDropDown, setIsDropDown] = useState(false);

  return (
    <div className={Style.container}>
      {TextTop && (
        <ParagraphsP Text={TextTop} TextName={"text_flex_start_normal"} />
      )}
      <div className={Style.form}>
        <div className={Style.value} onClick={HandelClick}>
          {value ? (
            <ParagraphsP Text={value} TextName="text_flex_start_normal" />
          ) : (
            <ParagraphsP Text={"select"} TextName="text_flex_start_normal" />
          )}
          <IoIosArrowDown />
        </div>
        {isDropDown && (
          <div className={Style.drop_down}>
            {DropDownArray?.length
              ? DropDownArray.map((item: any, index: number) => (
                  <div
                    key={index}
                    className={Style.div_container_value}
                    onClick={() => {
                      HandelClickChange(item._id, item.name);
                    }}
                  >
                    {" "}
                    <ParagraphsP Text={item.name} />
                  </div>
                ))
              : null}
          </div>
        )}
        {TextDown && <small className={Style.second_small}>{TextDown}</small>}
      </div>
    </div>
  );
};
