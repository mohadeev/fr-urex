import React, { useEffect, useState } from "react";
import SlideAndBookForm from "./tour-components/slider-and-book-form/SlideAndBookForm";
import Style from "../../styles/pages/tour/tour.module.css";
import TourDetails from "./tour-components/tour-details/TourDetails";
import basedGetUrlRequest from "../../utils/basedGetUrlRequest";
import { useRouter } from "next/router";
import Other from "./tour-components/other/Other";

const TourPage = ({ allData, Tours }: any) => {
  const [tour, setTour] = useState(allData);

  return (
    <div className={Style.container}>
      <SlideAndBookForm tourData={tour} />
      <TourDetails tourData={tour} />

      <Other Tours={Tours} />
    </div>
  );
};

export default TourPage;
