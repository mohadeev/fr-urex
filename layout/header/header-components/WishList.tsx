import React from "react";
import { BiHeart } from "@react-icons/all-files/bi/BiHeart";
import Style from "../../../styles/layout/header/header-compnents/my-account.module.css";
// import { HeaderText } from "../../../components/modals/NormalText";
import Link from "next/link";
import { useSelector } from "react-redux";
import { HeaderText } from "../../../components/modals/HeaderText";

const MyAccount = () => {
  const basketLength = useSelector(
    (state: any) => state.basketReducer.wishListBasket
  );
  return (
    <Link href={"/user/wish-list"}>
      <div className={Style.container}>
        {basketLength?.length >= 1 && (
          <div className={Style.number_container}>
            <HeaderText
              Text={basketLength.length}
              // TextName={"text_flex_start_normal"}
            />
          </div>
        )}
        <BiHeart />
        <HeaderText Text={"Wishlist"} />
      </div>
    </Link>
  );
};

export default MyAccount;
