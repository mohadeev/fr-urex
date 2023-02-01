import React from "react";
import Style from "../../../../styles/pages/tour/tour-components/slider-and-book-form/slider.module.css";
import { BiHeart } from "@react-icons/all-files/bi/BiHeart";
import { SubmiteButton } from "../../../modals/Buttons";
import { useDispatch } from "react-redux";
import { addToWishList } from "../../../../redux/basket-slice/BasketSlice";

const Slider = ({ tourData }: any) => {
  const Bg = tourData?.images?.length ? tourData?.images[0] : "";
  console.log(Bg);
  const StyleButton = {
    backgroundColor: "#ffff",
    color: "#222222",
  };
  const dispatch = useDispatch();
  const HandelAddWishList = () => {
    dispatch(addToWishList(tourData));
  };
  return (
    <div className={Style.container}>
      <div
        style={{
          backgroundImage: `url( ${
            process.env.NEXT_PUBLIC_BACK_END_URL + "/api/get/read/images/" + Bg
          })`,
        }}
        className={Style.container_images}
      >
        <div onClick={HandelAddWishList} className={Style.wish_list}>
          <SubmiteButton
            StyleButton={StyleButton}
            Icon={<BiHeart />}
            TextSubmite={"Add to wish list"}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
