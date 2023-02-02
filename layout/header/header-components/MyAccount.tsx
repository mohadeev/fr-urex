import React, { useEffect, useState } from "react";
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import { FiLogIn } from "@react-icons/all-files/fi/FiLogIn";
import { BiHistory } from "@react-icons/all-files/bi/BiHistory";
import { FiSettings } from "@react-icons/all-files/fi/FiSettings";
import Style from "../../../styles/layout/header/header-compnents/my-header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { ToggleMenu } from "../../../redux/style-slice/menu/SideMenu";
// import { HeaderText } from "../../../components/modals/NormalText";
import ModalContainer from "../../../components/modals/ModalContainer";
import allExcursionsFetch from "../../../utils/allExcursionsFetch";
import { FiLogOut } from "@react-icons/all-files/fi/FiLogOut";

import { MdCardTravel } from "@react-icons/all-files/md/MdCardTravel";
import { RiTicketLine } from "@react-icons/all-files/ri/RiTicketLine";
import { useRouter } from "next/router";
import { UserSignOut } from "../../../redux/user-slice/UserSignIn";
import { HeaderText } from "../../../components/modals/HeaderText";
// import Cookies from "js-cookie";

const MyAccount = () => {
  const Router = useRouter();
  const dispatch = useDispatch();
  const handelDispatch = () => {
    //dispatch(ToggleMenu());
    setShowDiv(!ShowDiv);
  };
  const UserIsSignedIn = useSelector(
    (state: any) => state.UserSignIn.UserIsSignedIn
  );
  const userData = useSelector((state: any) => state.UserSignIn.userdata);
  const ModalContainerBlo = useSelector(
    (state: any) => state.SideMenu.ModalContainer
  );
  const Ref = React.useRef<HTMLDivElement>(null);
  const RefContainer = React.useRef<HTMLDivElement>(null);

  const [ShowDiv, setShowDiv] = useState(false);
  useEffect(() => {
    const handelClick = (e: any) => {
      if (RefContainer && RefContainer.current && Ref && Ref.current) {
        const refany = RefContainer.current;
        const refBtn = Ref.current;
        if (refany.contains(e.target)) {
          setShowDiv(true);
        } else if (refBtn.contains(e.target)) {
          //setShowDiv(!ShowDiv);
        } else {
          setShowDiv(false);
        }
      }
    };
    window.addEventListener("click", handelClick);
  }, [ShowDiv]);
  const HandelLogIn = () => {
    Router.push("/auth/sign-in");
  };
  const HandelHistroy = () => {
    Router.push("/user/history");
  };
  const HandelSigUp = () => {
    Router.push("/auth/sign-up");
  };
  const HandelAccount = () => {
    Router.push("/user/account");
  };
  const HandelSettings = () => {
    Router.push("/user/settings");
  };
  const HandelSignOut = () => {
    dispatch(UserSignOut());
    // const userr = Cookies.get("user");

    document.cookie =
      "user" + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";

    // Cookies.remove("user");

    Router.push("/");
  };
  const dropDownItems = [
    { name: "Log-in", icon: <FiLogIn />, func: HandelLogIn },
    { name: "Sing-up", icon: <AiOutlineUser />, func: HandelSigUp },
    { name: "History", icon: <BiHistory />, func: HandelHistroy },
    { name: "Setting", icon: <FiSettings />, func: HandelSettings },
  ];
  const dropDownItemsLogIn = [
    { name: "My Account", icon: <AiOutlineUser />, func: HandelAccount },
    { name: "Bookings", icon: <MdCardTravel />, func: HandelAccount },
    { name: "Tickets", icon: <RiTicketLine />, func: HandelAccount },
    { name: "History", icon: <BiHistory />, func: HandelHistroy },
    { name: "Setting", icon: <FiSettings />, func: HandelSettings },
    { name: "Sign-out", icon: <FiLogOut />, func: HandelSignOut },
  ];
  return (
    <div className={Style.container}>
      <div
        ref={Ref}
        onClick={handelDispatch}
        className={Style.container_my_account}
      >
        <AiOutlineUser />
        <HeaderText
          Text={UserIsSignedIn ? userData?.username : "Log-in"}
          // TextName={"text_flex_start_normal"}
        />
      </div>
      {ShowDiv && (
        <div ref={RefContainer} className={Style.modal_}>
          <ModalContainer Bloen={ShowDiv}>
            <div className={Style.modal_container}>
              {UserIsSignedIn
                ? dropDownItemsLogIn.map(({ name, icon, func }) => (
                    <div
                      onClick={() => {
                        func && func();
                      }}
                      className={Style.link_container}
                    >
                      {icon}
                      <HeaderText
                        Text={name}
                        // TextName={"text_flex_start_normal"}
                      />
                    </div>
                  ))
                : dropDownItems.map(({ name, icon, func }) => (
                    <div
                      onClick={() => {
                        func && func();
                      }}
                      className={Style.link_container}
                    >
                      {icon}
                      <HeaderText
                        Text={name}
                        // TextName={"text_flex_start_normal"}
                      />
                    </div>
                  ))}
              {/* {dropDownItems.map(({ name, icon, func }) => (
                <div onClick={func && func} className={Style.link_container}>
                  {icon}
                  <HeaderText
                    Text={name}
                    // TextName={"text_flex_start_normal"}
                  />
                </div>
              ))} */}
            </div>
          </ModalContainer>
        </div>
      )}
    </div>
  );
};

export default MyAccount;
