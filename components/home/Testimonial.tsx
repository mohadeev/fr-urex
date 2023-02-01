import React from "react";
import Style from "../../styles/pages/home/testimonial.module.css";
import ReviewTestimonial from "./ReviewTestimonial";

const Testimonial = () => {
  return (
    <div className={Style.container}>
      <div className={Style.img}></div>
      <div className={Style.reviews_container}>
        <ReviewTestimonial /> <ReviewTestimonial />
      </div>
    </div>
  );
};

export default Testimonial;
