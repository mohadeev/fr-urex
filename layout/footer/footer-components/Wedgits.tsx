import React from "react";
import Style from "../../../styles/layout/footer/footer-components/wedgits.module.css";
import NewsLatter from "./NewsLatter";
import PaymentImages from "./PaymentImages";
import SocailMediaLinks from "./SocailMediaLinks";

const Wedgits = () => {
  return (
    <div className={Style.container}>
      <NewsLatter />
      <PaymentImages />
      <SocailMediaLinks />
    </div>
  );
};

export default Wedgits;
