import React from "react";
import Review from "./Review";
import Style from "../../../../styles/pages/tour/tour-components/tour-details/reviews.module.css";
import { NormalTitlesMedum } from "../../../modals/TitlesHeads";

const Reviews = ({ tourData }: any) => {
  return (
    <div className={Style.container}>
      <NormalTitlesMedum Head={"Customer Reviews"} HeadName="m_t" />

      {tourData?.reviews?.length
        ? tourData?.reviews.map((review: any) => <Review review={review} />)
        : null}
      <Review />
    </div>
  );
};

export default Reviews;
