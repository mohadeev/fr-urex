import React from "react";
import { BsStarFill } from "@react-icons/all-files/bs/BsStarFill";
import Style from "../../styles/pages/home/review-testimonial.module.css";

const ReviewTestimonial = ({ review }: any) => {
  const repeat = Array(5)
    .fill(0)
    .map((_, i) => (
      <i key={i}>
        <BsStarFill />
      </i>
    ));
  const Text =
    "We did a 2weeks safari in Uganda and we are stictive in the nr, thank you so much for the wonderful post about us! We will keep organizing these wonderful tours.....and hopefully we can organize one for you again!";
  const Bg = "/download.png";
  return (
    <div className={Style.container}>
      <div className={Style.review_container}>
        <div className={Style.review_writer_container}>
          <p className={Style.stars}>{repeat}</p>
          <p className={Style.review_name}>Ur Excursion Travler</p>
        </div>
      </div>

      <div className={Style.review_data_container}>
        <p className={Style.review_content}>{Text}</p>
      </div>
    </div>
  );
};

export default ReviewTestimonial;
