import { IoCloseOutline } from "@react-icons/all-files/io5/IoCloseOutline";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Style from "../../../styles/modals/auth/sign-up.module.css";
import { reducerFormSignUp } from "../../../redux/style-slice/general-style/GenrealStyle";

const AuthSignIn = () => {
  const signUp = useSelector((state: any) => state.GenrealStyle.signUp);
  const dispatch = useDispatch();
  const handelSwitchSignOption = () => {
    dispatch(reducerFormSignUp(false));
  };
  return (
    <div className={Style.singup_container}>
      {signUp ? <SignUp /> : <SignIn />}{" "}
      <span onClick={handelSwitchSignOption} className={Style.meun}>
        <IoCloseOutline />
      </span>
    </div>
  );
};

export default AuthSignIn;
