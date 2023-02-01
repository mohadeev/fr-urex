import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { tourDataHandler } from "../../../redux/tour-slice/tourSlice";
import { InputStart, TextEreaStart } from "../../modals/Inputs";

const OverViewTitle = () => {
  const [name, setName] = useState("");
  const [overview, setOverview] = useState("");
  const dispatch = useDispatch();
  const HandelChangeTitle = (e: any) => {
    setName(e.target.value);
    dispatch(
      tourDataHandler({
        message: "title",
        paylaod: e.target.value,
      })
    );
  };
  const HandelChangeOverview = (e: any) => {
    setOverview(e.target.value);
    dispatch(
      tourDataHandler({
        message: "overview",
        paylaod: e.target.value,
      })
    );
  };
  return (
    <>
      <InputStart
        HandelChange={HandelChangeTitle}
        TextTop={"Title"}
        PlaceHolder={"title"}
      />

      <TextEreaStart
        HandelChange={HandelChangeOverview}
        TextTop={"Overview"}
        PlaceHolder={"overview"}
      />
    </>
  );
};

export default OverViewTitle;
