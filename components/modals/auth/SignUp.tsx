import React, { useState } from "react";
import Style from "../../../styles/modals/auth/sign-up.module.css";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { AiOutlineEye } from "@react-icons/all-files/ai/AiOutlineEye";
import { AiOutlineEyeInvisible } from "@react-icons/all-files/ai/AiOutlineEyeInvisible";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { reducerSignUp } from "../../../redux/style-slice/general-style/GenrealStyle";
import basedPostUrlRequest from "../../../utils/basedPostUrlRequest";
import { UserSignedIn } from "../../../redux/user-slice/UserSignIn";
import basedPostUrlRequestLogedIn from "../../../utils/basedPostUrlRequestLogedIn";

const errors = [
  {
    name: "WrongPassWord",
    value: "Wrong password please try again.",
  },
  {
    name: "EamilNotFinded",
    value: "Email was not finnded please try again or sign-up instead.",
  },
  {
    name: "RandomTextNotEmailAdress",
    value: "this text does not seems to be a email address please",
  },
  {
    name: "PasswordNotMatch",
    value: "Password not matched",
  },
  {
    name: "ShortPassWord",
    value: "password is too short, password should cotain at less 8 characters",
  },
  {
    name: "AvalibleEmail",
    value: " Sorry this email is arlady avalible",
  },
];
const SignUp = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [conifirmPassword, setConifirmPassword] = useState("");
  const [resMessage, setResMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const Router = useRouter();
  const [ShowPasWord, setShowPasWord] = useState(false);
  const [ShowPasWord1, setShowPasWord1] = useState(false);
  const ShowPasWordFunc = () => {
    setShowPasWord(!ShowPasWord);
  };
  const ShowPasWordFunc1 = () => {
    setShowPasWord1(!ShowPasWord1);
  };

  const UserIsSignedIn = useSelector(
    (state: any) => state.UserSignIn.UserIsSignedIn
  );

  const HandelSumite = async (e: any) => {
    e.preventDefault();
    const Body: any = {
      email,
      password,
      conifirmpassword: conifirmPassword,
      username: userName,
    };
    setError("");
    setResMessage("");

    basedPostUrlRequest("/api/auth/sign-up", Body).then((res: any) => {
      if (res) {
        if (res.user) {
          Cookies.set("user", JSON.stringify(res.user));
          // sessionStorage.setItem("user", JSON.stringify(res.user));
          dispatch(UserSignedIn(res.user));
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
    dispatch(reducerSignUp(false));
  };
  return (
    <div className={Style.div_form}>
      <form className={Style.form_sing_up} onSubmit={HandelSumite}>
        <label className={Style.label_iput}>
          <input
            className={Style.form_sing_up_input}
            required={true}
            placeholder="username"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </label>
        {error ? <p>{error}</p> : ""}
        <label className={Style.label_iput}>
          <input
            className={Style.form_sing_up_input}
            required={true}
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label className={Style.label_iput}>
          <input
            className={Style.form_sing_up_input}
            name="password"
            placeholder="Password"
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
        <label className={Style.label_iput}>
          <input
            className={Style.form_sing_up_input}
            placeholder="Password"
            type={ShowPasWord1 ? "text" : "password"}
            required={true}
            onChange={(e) => {
              setConifirmPassword(e.target.value);
            }}
          />
          {ShowPasWord1 ? (
            <span className={Style.ayes_display} onClick={ShowPasWordFunc1}>
              <AiOutlineEyeInvisible />
            </span>
          ) : (
            <span className={Style.ayes_display} onClick={ShowPasWordFunc1}>
              <AiOutlineEye />
            </span>
          )}
        </label>
        <p className={Style._terms}>
          By continuing, you agree to{" "}
          <Link href="/user/terms" passHref={true}>
            <span className={Style.link_terms}>Mystore&apos;s Terms </span>
          </Link>
          of Use and{" "}
          <Link href="/user/privacy-policy" passHref={true}>
            <span className={Style.link_terms}>Privacy Policy.</span>
          </Link>
        </p>
        <button className={Style.button_sign_up} onSubmit={HandelSumite}>
          Sing up
        </button>
        <button
          className={Style.button_sign_up_outline}
          onClick={handelSwitchSignOption}
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SignUp;
