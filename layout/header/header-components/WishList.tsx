import React from "react";
import { BiHeart } from "@react-icons/all-files/bi/BiHeart";
import Style from "../../../styles/layout/header/header-compnents/my-account.module.css";
import { ParagraphsP } from "../../../components/modals/NormalText";
import Link from "next/link";
import { useSelector } from "react-redux";

const MyAccount = () => {
  const basketLength = useSelector(
    (state: any) => state.basketReducer.wishListBasket
  );
  return (
    <Link href={"/user/wish-list"}>
      <div className={Style.container}>
        {basketLength?.length >= 1 && (
          <div className={Style.number_container}>
            <ParagraphsP
              Text={basketLength.length}
              TextName={"text_flex_start_normal"}
            />
          </div>
        )}
        <BiHeart />
        <ParagraphsP Text={"Wishlist"} TextName={"text_flex_start_normal"} />
      </div>
    </Link>
  );
};

export default MyAccount;
