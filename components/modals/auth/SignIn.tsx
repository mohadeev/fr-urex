import React, { useState, useEffect } from "react";
import axios from "axios";
// import Style from "../../../styles/components/auth/sign-up.module.css";
import Style from "../../../styles/modals/auth/sign-up.module.css";
import { useRouter } from "next/router";
// import { UserLoginSuccessed } from "../../redux/UserSlice/UserSlice";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { AiOutlineEye } from "@react-icons/all-files/ai/AiOutlineEye";
import { AiOutlineEyeInvisible } from "@react-icons/all-files/ai/AiOutlineEyeInvisible";
import Link from "next/link";
import { reducerSignUp } from "../../../redux/style-slice/general-style/GenrealStyle";
import basedPostUrlRequest from "../../../utils/basedPostUrlRequest";
import { UserSignedIn } from "../../../redux/user-slice/UserSignIn";
const errors = [
  {
    name: "WrongPassWord",
    value: "Wrong password please try again.",
  },
  {
    name: "EamilNotFinded",
    value: "Email was not finnded please try again or sign-up instead.",
  },
];
const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ResMessage, setResMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [ShowPasWord, setShowPasWord] = useState(false);
  const [ShowPasWord1, setShowPasWord1] = useState(false);
  const ShowPasWordFunc = () => {
    setShowPasWord(!ShowPasWord);
  };
  const ShowPasWordFunc1 = () => {
    setShowPasWord1(!ShowPasWord1);
  };
  const Router = useRouter();

  const WindowHeight = useSelector(
    (state: any) => state.GenrealStyle.WindowHeight
  );
  const UserIsSignedIn = useSelector(
    (state: any) => state.UserSignIn.UserIsSignedIn
  );
  const HandelLogIn = async (e: any) => {
    e.preventDefault();
    const Body: any = { email, password };
    basedPostUrlRequest("/api/auth/sign-in", Body).then((res) => {
      if (res) {
        if (res.user) {
          Cookies.set("user", JSON.stringify(res.user));
          Cookies.set("expires", "Fri, 31 Dec 9999 23:59:59 GMT");
          // sessionStorage.setItem("user", JSON.stringify(res.user));
          dispatch(UserSignedIn(res.user));
          Router.push("/");
          setResMessage(res.message);
        } else if (!res.user && res.message) {
          setError(res.message);
          errors.map(({ name, value }) => {
            if (name === res.message) {
              setResMessage(value);
            }
          });
        }
      }
    });
  };
  const handelSwitchSignOption = () => {
    dispatch(reducerSignUp(true));
  };
  return (
    <div className={Style.div_form}>
      <form className={Style.form_sing_up} onSubmit={HandelLogIn}>
        <label htmlFor="email" className={Style.label_iput}>
          <input
            type="text"
            required={true}
            placeholder="Email"
            name="email"
            id="email"
            className={Style.form_sing_up_input}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label htmlFor="password" className={Style.label_iput}>
          <input
            id="password"
            name="password"
            placeholder="Password"
            className={Style.form_sing_up_input}
            type={ShowPasWord ? "text" : "password"}
            required={true}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {ShowPasWord ? (
            <span className={Style.ayes_display} onClick={ShowPasWordFunc}>
              <AiOutlineEyeInvisible />
            </span>
          ) : (
            <span className={Style.ayes_display} onClick={ShowPasWordFunc}>
              <AiOutlineEye />
            </span>
          )}
        </label>

        {error ? <p>Eroor</p> : ""}
        <p className={Style._terms}>
          By continuing, you agree to{" "}
          <Link href="/user/terms" passHref={true}>
            <span className={Style.link_terms}>Mystore&apos;s Terms</span>
          </Link>{" "}
          of Use and{" "}
          <Link href="/user/privacy-policy" passHref={true}>
            <span className={Style.link_terms}>Privacy Policy.</span>
          </Link>
        </p>
        <button className={Style.button_sign_up} onSubmit={HandelLogIn}>
          Sign in
        </button>
        <button
          className={Style.button_sign_up_outline}
          onClick={handelSwitchSignOption}
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignIn;
