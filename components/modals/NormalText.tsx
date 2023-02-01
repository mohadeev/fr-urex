import React from "react";
import Style from "../../styles/modals/normal-text.module.css";

export const ParagraphsP = ({ Text, TextName }: any) => {
  const data = () => {
    if (TextName === "text_flex_start_normal") {
      return <p className={Style.text_flex_start_normal}>{Text}</p>;
    } else {
      return <p className={Style.text_flex_start_normal}>{Text}</p>;
    }
  };
  return <>{Text && data()}</>;
};

export const TextSmall = ({ Text, TextName }: any) => {
  const data = () => {
    if (TextName === "text_samll_start_white") {
      return <p className={Style.text_samll_start_white}>{Text}</p>;
    } else {
      return (
        <small className={Style.text_samll_start_blue}>{Text && Text}</small>
      );
    }
  };
  return <>{Text && data()}</>;
};

export const JustTextSmall = ({ Text, TextName }: any) => {
  const data = () => {
    if (TextName === "text_samll_start_white") {
      return <p className={Style.text_samll_start_white}>{Text}</p>;
    } else {
      return (
        <small className={Style.text_samll_start_blue}>{Text && Text}</small>
      );
    }
  };
  return <>{Text && data()}</>;
};