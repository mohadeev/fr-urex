import React from "react";
import Style from "../../styles/modals/skiny-text.module.css";

export const SkinyText = ({ Text, HeadName }: any) => {
  const dataFetch = () => {
    if (HeadName === "m_t") {
      return <strong className={Style.small}>{Text}</strong>;
    } else {
      return <p className={Style.small}>{Text}</p>;
    }
  };
  return <>{Text && dataFetch()}</>;
};
