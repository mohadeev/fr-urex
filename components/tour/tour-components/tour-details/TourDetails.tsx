import React from "react";

import { IoHeartOutline } from "@react-icons/all-files/io5/IoHeartOutline";
import { IoShareOutline } from "@react-icons/all-files/io5/IoShareOutline";
import { GoVerified } from "@react-icons/all-files/go/GoVerified";
import { BsStarFill } from "@react-icons/all-files/bs/BsStarFill";
import Style from "../../../../styles/pages/tour/tour-components/tour-details/tour-details.module.css";
import OverviewHighlitesPlaces from "./OverviewHighlitesPlaces";
import Itinerary from "./Itinerary";
import Reviews from "./Reviews";

const TourDetails = ({ tourData }: any) => {
  return (
    <div className={Style.container}>
      <OverviewHighlitesPlaces tourData={tourData} />
      <Itinerary tourData={tourData} />
      <Reviews tourData={tourData} />
    </div>
  );
};

export default TourDetails;
