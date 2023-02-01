//import AiOutlineShopping from ""
import React from "react";
import { AiOutlineShopping } from "@react-icons/all-files/ai/AiOutlineShopping";
import Style from "../../../styles/layout/header/header-compnents/my-account.module.css";
import { ParagraphsP } from "../../../components/modals/NormalText";
import Link from "next/link";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const basketLength = useSelector(
    (state: any) => state.basketReducer.cardBasket
  );
  return (
    <Link href={"/user/card"}>
      <div className={Style.container}>
        {basketLength?.length >= 1 && (
          <div className={Style.number_container}>
            <ParagraphsP
              Text={basketLength.length}
              TextName={"text_flex_start_normal"}
            />
          </div>
        )}

        <AiOutlineShopping />
        <ParagraphsP Text={"Cart"} TextName={"text_flex_start_normal"} />
      </div>
    </Link>
  );
};

export default ShoppingCart;
