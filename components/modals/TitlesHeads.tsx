import React from "react";
import Style from "../../styles/modals/titles-heads.module.css";

export const TitlesHeads = ({ Head, HeadName }: any) => {
  const data = () => {
    if (HeadName === "head_4_bold") {
      return <strong className={Style.head_4_bold}>{Head}</strong>;
    } else {
      return <strong className={Style.head_4_bold}>{Head}</strong>;
    }
  };
  return <>{Head && data()}</>;
};

export const NormalTitlesMedum = ({ Head, HeadName }: any) => {
  const dataFetch = () => {
    if (HeadName === "m_t") {
      return <strong className={Style.m_t}>{Head}</strong>;
    } else if (HeadName === "big_strong") {
      return <strong className={Style.big_strong}>{Head}</strong>;
    } else {
      return <strong className={Style.strong}>{Head}</strong>;
    }
  };
  return <>{Head && dataFetch()}</>;
};
