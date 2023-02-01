import Image from "next/image";
import Link from "next/link";
import React from "react";
import Style from "../../styles/layout/header/header-compnents/header-left.module.css";
import { IoMenuOutline } from "@react-icons/all-files/io5/IoMenuOutline";
import { IoCloseOutline } from "@react-icons/all-files/io5/IoCloseOutline";

import { FaMapSigns } from "@react-icons/all-files/fa/FaMapSigns";
import { useDispatch, useSelector } from "react-redux";
import { ToggleMenu } from "../../redux/style-slice/menu/SideMenu";
const HeaderLeft = () => {
  const dispatch = useDispatch();
  const handelToggleMenu = () => {
    dispatch(ToggleMenu());
  };
  const MenuBoolean = useSelector((state: any) => state.SideMenu.MenuBoolean);

  return (
    <div className={Style.container}>
      <span onClick={handelToggleMenu} className={Style.meun}>
        {MenuBoolean ? <IoCloseOutline /> : <IoMenuOutline />}
      </span>

      <Link href="/">
        <div className={Style.container_logo}>
          <span className={Style.logo_icon}>
            <FaMapSigns />
          </span>
          <span className={Style.logo_text}>Ur Excursion</span>
        </div>
      </Link>
    </div>
  );
};
//Fdf
export default HeaderLeft;
