import React, { useState } from "react";
import { InputStart } from "../../modals/Inputs";

const Pricing = () => {
  const [price, sePrice] = useState("");
  const HandelChangePrice = (e: any) => {
    sePrice(e.target.value);
  };
  return (
    <>
      <InputStart
        HandelChange={HandelChangePrice}
        TextTop={"Price"}
        PlaceHolder={"price"}
      />
    </>
  );
};

export default Pricing;
