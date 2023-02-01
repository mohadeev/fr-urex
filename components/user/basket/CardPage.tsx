import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// import Style from "../../styles/pages/tours/tours.module.css";
import Style from "../../../styles/pages/user/card/card.module.css";
import { TitlesHeads } from "../../modals/TitlesHeads";
import ToursCard from "../../tours/tours-components/TourCard";
import CardTourDetails from "./card-comp/CardTourDetails";
import ConfirmTours from "./card-comp/ConfirmTours";

const CardPage = () => {
  const basketLength = useSelector(
    (state: any) => state.basketReducer.cardBasket
  );
  return (
    <div className={Style.container}>
      <div className={Style.text_container}>
        <TitlesHeads Head={"Shopping cart"} HeadName="head_4_bold" />
      </div>
      <div className={Style.tours_added_container}>
        {basketLength.length
          ? basketLength.map((item: any) => <CardTourDetails DestData={item} />)
          : null}
      </div>
      <div className={Style.fonfrim_container}>
        <ConfirmTours />
      </div>
      <div className={Style.related_container}>
        <TitlesHeads Head={"Related Services"} HeadName="head_4_bold" />
      </div>{" "}
      <div className={Style.tours_container}>
        {basketLength.length
          ? basketLength.map((item: any) => <ToursCard DestData={item} />)
          : null}
      </div>
    </div>
  );
};

export default CardPage;
