//import AiOutlineShopping from ""
import React from "react";
import { AiOutlineShopping } from "@react-icons/all-files/ai/AiOutlineShopping";
import Style from "../../../styles/layout/header/header-compnents/my-account.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";
import { HeaderText } from "../../../components/modals/HeaderText";

const ShoppingCart = () => {
  const basketLength = useSelector(
    (state: any) => state.basketReducer.cardBasket
  );
  return (
    <Link href={"/user/card"}>
      <div className={Style.container}>
        {basketLength?.length >= 1 && (
          <div className={Style.number_container}>
            <HeaderText Text={basketLength.length} />
          </div>
        )}

        <AiOutlineShopping />
        <HeaderText Text={"Cart"} />
      </div>
    </Link>
  );
};

export default ShoppingCart;
