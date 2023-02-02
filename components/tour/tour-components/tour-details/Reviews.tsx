import React from "react";
import Review from "./Review";
import Style from "../../../../styles/pages/tour/tour-components/tour-details/reviews.module.css";

const Reviews = ({ tourData }: any) => {
  return (
    <div className={Style.container}>
      <b className={Style.title_bold}>Customer Reviews</b>
      {tourData?.reviews?.length
        ? tourData?.reviews.map((review: any) => <Review review={review} />)
        : null}
      <Review />
    </div>
  );
};

export default Reviews;
