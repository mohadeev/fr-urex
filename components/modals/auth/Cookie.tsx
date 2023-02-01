import React, { useState, useEffect } from "react";
import axios from "axios";
// import Style from "../../../styles/components/auth/sign-up.module.css";
import Style from "../../../styles/modals/auth/cookie.module.css";
import { useRouter } from "next/router";
// import { UserLoginSuccessed } from "../../redux/UserSlice/UserSlice";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { AiOutlineEye } from "@react-icons/all-files/ai/AiOutlineEye";
import { AiOutlineEyeInvisible } from "@react-icons/all-files/ai/AiOutlineEyeInvisible";
import Link from "next/link";
import { toggleCookie } from "../../../redux/style-slice/general-style/GenrealStyle";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { TitlesHeads } from "../TitlesHeads";
import { ParagraphsP } from "../NormalText";
//GH
const Cookie = () => {
  const dispatch = useDispatch();
  const handelToggleMenu = () => {
    dispatch(toggleCookie(false));
  };
  return (
    <div className={Style.singup_container}>
      <div className={Style.div_second}>
        <TitlesHeads Head={"Your Ur Excursion Privacy Settings"} HeadName="head_4_bold" />
        <ParagraphsP
          Text={
            "In order to give you the best experience, we use cookies and similar technologies for performance, analytics, personalization, advertising, and to help our site function. Want to know more? Read our Cookie Policy. You can change your preferences any time in your Privacy Settings."
          }
          TextName={"text_flex_start_normal"}
        />
        <div></div>
        <button className={Style.button_sign_up} onClick={handelToggleMenu}>
          Accept
        </button>
      </div>
      <span className={Style.meun}>
        <AiOutlineClose />
      </span>
    </div>
  );
};

export default Cookie;
