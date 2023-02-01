import React, { useEffect, useState } from "react";
import ToursCard from "../../../tours/tours-components/TourCard";
import RlatedTours from "./RlatedTours";
// import Style from "../../../styles/pages/tour/tour-components/other/other.module.css";
import Style from "../../../../styles/pages/tour/tour-components/other/other.module.css";
const Other = ({ Tours }: any) => {
  return (
    <div className={Style.container}>
      <RlatedTours Text="You might also like..." Tours={Tours} />
    </div>
  );
};

export default Other;
