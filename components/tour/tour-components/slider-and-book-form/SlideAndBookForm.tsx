import React from "react";
import BookForm from "./BookForm";
import Path from "./Path";
import Slider from "./Slider";
import { IoHeartOutline } from "@react-icons/all-files/io5/IoHeartOutline";
import { IoShareOutline } from "@react-icons/all-files/io5/IoShareOutline";
import { GoVerified } from "@react-icons/all-files/go/GoVerified";
import { BsStarFill } from "@react-icons/all-files/bs/BsStarFill";
import { BiHeart } from "@react-icons/all-files/bi/BiHeart";

import Style from "../../../../styles/pages/tour/tour-components/slider-and-book-form/slider-and-book-form.module.css";
import TourData from "./TourData";
import { useDispatch } from "react-redux";
import { addToWishList } from "../../../../redux/basket-slice/BasketSlice";

const SlideAndBookForm = ({ tourData }: any) => {
  const repeat = Array(5)
    .fill(0)
    .map((_, i) => (
      <i key={i}>
        <BsStarFill />
      </i>
    ));

  const dispatch = useDispatch();
  const HandelAddWishList = () => {
    dispatch(addToWishList(tourData));
  };
  return (
    <div className={Style.container}>
      <div className={Style.container_slider_and_form}>
        <div className={Style.rating_date}>
          <div>
            <Path TourData={tourData} />
            <h2 className={Style.title}>{tourData?.name}</h2>
          </div>
          <div className={Style.container_review_ither}>
            <p className={Style.reveiws}>
              <span className={Style.stars}>{repeat}</span>
              <span className={Style.reveiws_number}>
                {tourData?.reviews?.length} Reviews{" "}
              </span>
              |
              <span className={Style.location}>
                {tourData?.start?.name}, Morocco
              </span>
            </p>
            <div className={Style.add_to_wish_list}>
              <span className={Style.share}>
                <IoShareOutline /> Share
              </span>
              <span onClick={HandelAddWishList} className={Style.wish_list}>
                <BiHeart />
                Add to wish list
              </span>
            </div>
          </div>
        </div>
        <Slider tourData={tourData} />
        <BookForm tourData={tourData} />
      </div>
      <TourData tourData={tourData} />
    </div>
  );
};

export default SlideAndBookForm;
