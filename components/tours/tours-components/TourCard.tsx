import React, { useRef } from "react";
import Style from "../../../styles/pages/tours/tours-card.module.css";
import { BiHeart } from "@react-icons/all-files/bi/BiHeart";
import { RiHeartFill } from "@react-icons/all-files/ri/RiHeartFill";
import { BsStarFill } from "@react-icons/all-files/bs/BsStarFill";
import Link from "next/link";
import {
  addToWishList,
  removeFromWishList,
  addToBasket,
  removeFromBasket,
} from "../../../redux/basket-slice/BasketSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
const ToursCard = ({ DestData }: any) => {
  const { asPath } = useRouter();
  const Router = useRouter();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const wishListRef = React.useRef<HTMLDivElement>(null);
  const basketRef = React.useRef<HTMLButtonElement>(null);
  const dispatch = useDispatch();
  const HandelClick = (e: any) => {
    if (
      wishListRef &&
      wishListRef.current &&
      wishListRef.current.contains(e.target)
    ) {
      if (asPath === "/user/wish-list") {
        dispatch(removeFromWishList({ id: DestData?._id }));
      } else {
        dispatch(addToWishList(DestData));
      }
    } else if (
      basketRef &&
      basketRef.current &&
      basketRef.current.contains(e.target)
    ) {
      if (asPath === "/user/card") {
        dispatch(removeFromBasket({ id: DestData?._id }));
      } else {
        dispatch(addToBasket(DestData));
      }
    } else {
      Router.push("/tours/" + DestData?._id);
    }
  };
  const Bg = DestData?.images?.length ? DestData?.images[0] : "";
  // <Link href={"/tours/" + DestData?._id}>
  return (
    <div onClick={HandelClick} className={Style.container}>
      <>
        <div
          className={Style.container_img}
          style={{
            backgroundImage: `url(${
              process.env.NEXT_PUBLIC_BACK_END_URL +
              "/api/get/read/images/" +
              Bg
            })`,
          }}
        >
          <div className={Style.svg_container} ref={wishListRef}>
            {asPath === "/user/wish-list" ? <RiHeartFill /> : <BiHeart />}
          </div>
        </div>
        <div className={Style.container_desc}>
          <b className={Style.title}>{DestData?.name}</b>
          <p className={Style.data_line}>
            <span className={Style.days}>{DestData?.days?.length} Days - </span>
            <b className={Style.rating}>
              5.0 <BsStarFill />
            </b>
            <span className={Style.reviews}>(15)</span>
          </p>
          <p className={Style.desc}>
            {DestData?.overview.slice(0, 100) + "..."}
          </p>
          <div className={Style.price_data}>
            <span className={Style.price}> From {DestData?.price} </span>
            {/* <button ref={basketRef} className={Style.book_now}>
              Book Now
            </button> */}
          </div>
        </div>
      </>
    </div>
  );
};

export default ToursCard;
