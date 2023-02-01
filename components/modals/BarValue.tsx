import React, { useState, useEffect } from "react";
import Style from "../../styles/modals/bar-value.module.css";
import { IoMailOpenOutline } from "@react-icons/all-files/io5/IoMailOpenOutline";

import { IoCloseOutline } from "@react-icons/all-files/io5/IoCloseOutline";

import { IoCreateOutline } from "@react-icons/all-files/io5/IoCreateOutline";

export const BarValue = ({
  TextDown,
  PlaceHolder,
  TextTop,
  Value,
  HandelRemoveBarValue,
  HandelEditBarValue,
  Key,
}: any) => {
  const HandelClick = () => {
    setIsDropDown(true);
  };
  const HandelClickChange = (item: any) => {
    setValue(item);
    setIsDropDown(false);
  };
  const [value, setValue] = useState("");
  const [isDropDown, setIsDropDown] = useState(false);

  return (
    <div
      id={"bar-value-element-index" + Key}
      key={Key}
      className={Style.container}
    >
      {TextTop && <small className={Style.second_small}>{TextTop}</small>}
      <div className={Style.form}>
        <div className={Style.value} onClick={HandelClick}>
          {Value && <p className={Style.text}>{Value}</p>}
          <div className={Style.close}>
            <span onClick={HandelEditBarValue} className={Style.icon}>
              <IoCreateOutline />
            </span>
            <span onClick={HandelRemoveBarValue} className={Style.icon}>
              <IoCloseOutline />
            </span>
          </div>
        </div>
        {TextDown && <small className={Style.second_small}>{TextDown}</small>}
      </div>
    </div>
  );
};
