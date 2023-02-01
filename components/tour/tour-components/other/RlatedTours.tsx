import React, { useEffect, useState } from "react";
// import Style from "../../../styles/pages/tours/tours.module.css";
import { TitlesHeads } from "../../../modals/TitlesHeads";
import ToursCard from "../../../tours/tours-components/TourCard";
//import Style from "../../../styles/pages/tour/tour-components/other/realted.module.css";
import Style from "../../../../styles/pages/tour/tour-components/other/realted.module.css";

const RlatedTours = ({ Tours, Text }: any) => {
  return (
    <div className={Style.container}>
      <TitlesHeads Head={Text} HeadName="head_4_bold" />
      <div className={Style.tours_container}>
        {Tours.length
          ? Tours.map((item: any) => <ToursCard DestData={item} />)
          : null}
      </div>
    </div>
  );
};

export default RlatedTours;
