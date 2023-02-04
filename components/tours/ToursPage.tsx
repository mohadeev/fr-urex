import React, { useEffect, useState } from "react";
import Style from "../../styles/pages/tours/tours.module.css";
import allToursFetch from "../../utils/allToursFetch";
import RlatedTours from "../tour/tour-components/other/RlatedTours";
import ToursCard from "./tours-components/TourCard";

const ToursPage = ({ tours }: any) => {
  // const [tours, setTours] = useState([]);
  // useEffect(() => {
  //   const locaFetch = async () => {
  //     await allToursFetch().then((dataRes: any) => {
  //       console.log(dataRes);
  //       if (dataRes && dataRes.responseData) {
  //         setTours(dataRes.responseData);
  //       }
  //     });
  //   };
  //   locaFetch();
  // }, []);
  return (
    <div className={Style.container}>
      <div className={Style.tours_container}>
        {/* {tours.length
          ? tours.map((item: any) => <ToursCard DestData={item} />)
          : null} */}
        <RlatedTours Text="" Tours={tours} />
      </div>
    </div>
  );
};

export default ToursPage;
