import { PayPalButtons } from "@paypal/react-paypal-js";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// import Style from "../../styles/pages/tours/tours.module.css";
import Style from "../../../styles/pages/user/card/card.module.css";
import { TitlesHeads } from "../../modals/TitlesHeads";
import ToursCard from "../../tours/tours-components/TourCard";
import CardTourDetails from "./card-comp/CardTourDetails";
import ConfirmTours from "./card-comp/ConfirmTours";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const CardPage = () => {
  const baskeServices = useSelector(
    (state: any) => state.basketReducer.cardBasket
  );
  console.log(baskeServices);
  const SubTotal = baskeServices.map((iteem: any) => parseInt(iteem.price));
  const SubTotalLater = SubTotal.reduce((a: any, b: any) => a + b, 0);
  console.log(SubTotal, SubTotalLater);

  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AdSmVgmgbp0ZcYbfzuwXEMj7skJZIi_AVHy-BZ6WoajW2Q23KzC7BbbJwOsCV_D8kn26_Zpd5kteyGLq",
      }}
    >
      <div className={Style.container}>
        <div className={Style.text_container}>
          <TitlesHeads Head={"Shopping cart"} HeadName="head_4_bold" />
        </div>
        <div className={Style.tours_added_container}>
          {baskeServices.length
            ? baskeServices.map((item: any) => (
                <CardTourDetails DestData={item} />
              ))
            : null}
        </div>
        <div className={Style.fonfrim_container}>
          <ConfirmTours />
        </div>
        <div className={Style.related_container}>
          <TitlesHeads Head={"Related Services"} HeadName="head_4_bold" />
        </div>{" "}
        <div className={Style.tours_container}>
          {baskeServices.length
            ? baskeServices.map((item: any) => <ToursCard DestData={item} />)
            : null}
        </div>
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: SubTotalLater,
                  },
                },
              ],
            });
          }}
          onApprove={(data: any, actions: any) => {
            return actions.order.capture().then((details: any) => {
              const name = details.payer.name.given_name;
              alert(`Transaction completed by ${name}`);
            });
          }}
        />
      </div>
    </PayPalScriptProvider>
  );
};

export default CardPage;
