import Image from "next/image";
import React from "react";
import { NormalTitlesMedum } from "../../../components/modals/TitlesHeads";
import Style from "../../../styles/layout/footer/footer-components/payment-images.module.css";

const PaymentImages = () => {
  const path = "/payment-methods/";
  const Images = [
    "paypal_border.svg",
    "visa.svg",
    "mastercard.svg",
    "maestro.svg",
  ];
  return (
    <div className={Style.container}>
      <NormalTitlesMedum Head="Payment Methods" HeadName="m_t" />
      <div className={Style.images_container}>
        {Images.map((Img, index) => (
          <div
            className={Style.img}
            key={index}
            style={{ backgroundImage: `url(${path + Img})` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PaymentImages;
