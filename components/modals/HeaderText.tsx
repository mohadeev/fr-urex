import React from "react";
import Style from "../../styles/modals/header-text.module.css";

export const HeaderText = ({ Text }: any) => {
  return <p className={Style.text_flex_start_normal}>{Text}</p>;
};
