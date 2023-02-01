import React, { useState, useEffect } from "react";
import Style from "../../styles/modals/buttons.module.css";
import { IoAddOutline } from "@react-icons/all-files/io5/IoAddOutline";
import { JustTextSmall, TextSmall } from "./NormalText";

export const ButtonCircul = ({ HandelClick }: any) => {
  return (
    <div className={Style.container}>
      <button onClick={HandelClick} className={Style.button_circul}>
        <IoAddOutline />
      </button>
    </div>
  );
};

export const SubmiteButton = ({
  StyleButton,
  HandelClick,
  TextSubmite,
  Icon,
}: any) => {
  return (
    <div className={Style.container}>
      <button
        style={StyleButton && StyleButton}
        onClick={HandelClick}
        className={Style.button_submite}
      >
        {Icon && Icon}  {TextSubmite ? TextSubmite : "Submite"}
      </button>
    </div>
  );
};
