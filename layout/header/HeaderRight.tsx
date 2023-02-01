import React from "react";
import Style from "../../styles/layout/header/header-compnents/header-right.module.css";
import MyAccount from "./header-components/MyAccount";
import Bookings from "./header-components/Bookings";
import WishList from "./header-components/WishList";
import LangAndCurrency from "./header-components/LangAndCurrency";
import { Currency, Lang } from "../../components/modals/LangCurrency";
import ShoppingCart from "./header-components/ShoppingCart";
import { useSelector } from "react-redux";

const HeaderRight = () => {
  const UserIsSignedIn = useSelector(
    (state: any) => state.UserSignIn.UserIsSignedIn
  );
  return (
    <div className={Style.container}>
      <li className={Style.langAndCurrency}>
        <Lang />
      </li>
      <WishList />
      <ShoppingCart />
      <MyAccount />
    </div>
  );
};

export default HeaderRight;
