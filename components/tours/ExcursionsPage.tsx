import React, { useEffect, useState } from "react";
import TourCard from "./tours-components/TourCard";
import Style from "../../styles/pages/tours/tours.module.css";
import allToursFetch from "../../utils/allToursFetch";

const ExcursionsPage = ({ tours }: any) => {
  return (
    <div className={Style.container}>
      <div className={Style.tours_container}>
        {tours.length
          ? tours.map((item: any) => <TourCard DestData={item} />)
          : null}
      </div>
    </div>
  );
};

export default ExcursionsPage;
