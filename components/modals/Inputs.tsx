import React from "react";
import Style from "../../styles/modals/inputs.module.css";
import { IoMailOpenOutline } from "@react-icons/all-files/io5/IoMailOpenOutline";
import { ParagraphsP } from "./NormalText";

export const InputStart = ({
  TextDown,
  PlaceHolder,
  TextTop,
  HandelChange,
  DefaultValueInput,
}: any) => {
  return (
    <div className={Style.container}>
      {TextTop && (
        <ParagraphsP Text={TextTop} TextName={"text_flex_start_normal"} />
      )}

      <div className={Style.form}>
        <input
          defaultValue={DefaultValueInput}
          type="text"
          placeholder={PlaceHolder}
          onChange={HandelChange}
        />
        {TextDown && <small className={Style.second_small}>{TextDown}</small>}
      </div>
    </div>
  );
};
export const TextEreaStart = ({
  TextDown,
  PlaceHolder,
  TextTop,
  HandelChange,
  DefaultValueTextArea,
}: any) => {
  return (
    <div id={"input-element-index"} className={Style.container}>
      {TextTop && (
        <ParagraphsP Text={TextTop} TextName={"text_flex_start_normal"} />
      )}
      <div className={Style.form_textarea}>
        <textarea
          defaultValue={DefaultValueTextArea}
          placeholder={PlaceHolder}
          onChange={HandelChange}
        />
        {TextDown && <small className={Style.second_small}>{TextDown}</small>}
      </div>
    </div>
  );
};

export const InputDate = ({
  TextDown,
  PlaceHolder,
  TextTop,
  HandelChange,
  DefaultValueInput,
}: any) => {
  return (
    <div className={Style.container_date}>
      {TextTop && (
        <ParagraphsP Text={TextTop} TextName={"text_flex_start_normal"} />
      )}

      <div className={Style.form}>
        <input
          defaultValue={DefaultValueInput}
          placeholder={PlaceHolder}
          onChange={HandelChange}
          type="Date"
        />
        {TextDown && <small className={Style.second_small}>{TextDown}</small>}
      </div>
    </div>
  );
};

export const InputNumber = ({
  TextDown,
  PlaceHolder,
  TextTop,
  HandelChange,
  DefaultValueInput,
}: any) => {
  return (
    <div className={Style.container_date}>
      {TextTop && (
        <ParagraphsP Text={TextTop} TextName={"text_flex_start_normal"} />
      )}

      <div className={Style.form}>
        <input
          defaultValue={DefaultValueInput}
          placeholder={PlaceHolder}
          onChange={HandelChange}
          type="number"
          name="quantity"
          min="0"
          max="1000000000000000000000000000000"
        />
        {TextDown && <small className={Style.second_small}>{TextDown}</small>}
      </div>
    </div>
  );
};
