import React, { useState, useEffect } from "react";
import axios from "axios";
// import Style from "../../../styles/components/auth/sign-up.module.css";
import Style from "../../../styles/modals/auth/cookie.module.css";
import { useRouter } from "next/router";
// import { UserLoginSuccessed } from "../../redux/UserSlice/UserSlice";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineEye } from "@react-icons/all-files/ai/AiOutlineEye";
import { AiOutlineEyeInvisible } from "@react-icons/all-files/ai/AiOutlineEyeInvisible";
import Link from "next/link";
import { toggleCookie } from "../../../redux/style-slice/general-style/GenrealStyle";
import { IoCloseOutline } from "@react-icons/all-files/io5/IoCloseOutline";
import { TitlesHeads } from "../TitlesHeads";
import { ParagraphsP } from "../NormalText";
import Cookies from "js-cookie";

//GH
const Cookie = () => {
  const dispatch = useDispatch();
  const handelToggleMenu = () => {
    Cookies.set("use-cookie", "true");

    dispatch(toggleCookie(false));
  };

  return (
    <div className={Style.singup_container}>
      <div className={Style.div_second}>
        <TitlesHeads
          Head={"Your Ur Excursion Privacy Settings"}
          HeadName="head_4_bold"
        />
        <ParagraphsP
          Text={
            "In order to give you the best experience, we use cookies and similar technologies for performance, analytics, personalization, advertising, and to help our site function. Want to know more? Read our Cookie Policy. You can change your preferences any time in your Privacy Settings."
          }
          TextName={"text_flex_start_normal"}
        />
        <div className={Style.buttons_container}>
          <button
            className={Style.button_open_color}
            onClick={handelToggleMenu}
          >
            Update settings
          </button>
          <button className={Style.button_sign_up} onClick={handelToggleMenu}>
            Accept
          </button>
        </div>
      </div>
      <span className={Style.meun}>
        <IoCloseOutline />
      </span>
    </div>
  );
};

export default Cookie;
