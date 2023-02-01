import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// import Style from "../../styles/pages/tours/tours.module.css";
import Style from "../../../styles/pages/tours/tours.module.css";
import ToursCard from "../../tours/tours-components/TourCard";

const WishListPage = () => {
  const basketLength = useSelector(
    (state: any) => state.basketReducer.wishListBasket
  );
  return (
    <div className={Style.container}>
      <div className={Style.tours_container}>
        {basketLength.length
          ? basketLength.map((item: any) => <ToursCard DestData={item} />)
          : null}
      </div>
    </div>
  );
};

export default WishListPage;
