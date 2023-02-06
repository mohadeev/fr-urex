import React from "react";
import Style from "../../../../styles/pages/tour/tour-components/tour-details/review.module.css";
import { BsStarFill } from "@react-icons/all-files/bs/BsStarFill";
import { ParagraphsP } from "../../../modals/NormalText";
const Review = ({ review }: any) => {
  const repeat = Array(5)
    .fill(0)
    .map((_, i) => (
      <i key={i}>
        <BsStarFill />
      </i>
    ));
  const Text =
    "We did a 2weeks safari in Uganda and we are grateful for the excellent services we received from Mukisa Safaris. The Trip was fantastic and enjoyable from the start to the end. Richard was so exceptionally helpful and informative in the planning phase,... Show more Mukisa Safaris Uganda Mukisa Safaris Uganda commented on this review Hello Xavier, thank you so much for the wonderful post about us! We will keep organizing these wonderful tours.....and hopefully we can organize one for you again!";
  const Bg = "/download.png";
  return (
    <div className={Style.container}>
      <div className={Style.review_container}>
        <div
          style={{ backgroundImage: `url(${Bg})` }}
          className={Style.image}
        ></div>
        <div className={Style.review_writer_container}>
          <span className={Style.name}>Xavier· January</span>
          <span className={Style.date}>Xavier· January 6th, 2022</span>
        </div>
        <div className={Style.icon}>...</div>
      </div>

      <div className={Style.review_data_container}>
        <div className={Style.review_desc_data}>
          <p className={Style.review_name}>Greate Travel tour to morocco </p>
          <p className={Style.stars}>{repeat}</p>
        </div>
        <ParagraphsP
          Text={Text}
          TextName={"text_flex_start_normal"}
        />
      </div>
    </div>
  );
};

export default Review;
