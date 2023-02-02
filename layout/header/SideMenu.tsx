import React from "react";
import Style from "../../styles/layout/header/header-compnents/side-menu.module.css";
import MyAccount from "./header-components/MyAccount";
import Bookings from "./header-components/Bookings";
import WishList from "./header-components/WishList";
import LangAndCurrency from "./header-components/LangAndCurrency";
import { Currency, Lang } from "../../components/modals/LangCurrency";
import ShoppingCart from "./header-components/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { ToggleMenu } from "../../redux/style-slice/menu/SideMenu";
import { IoCloseCircleOutline } from "@react-icons/all-files/io5/IoCloseCircleOutline";
import SearchInput from "./header-components/SearchInput";
import { ParagraphsP } from "../../components/modals/NormalText";
import { useRouter } from "next/router";
import { HeaderText } from "../../components/modals/HeaderText";
const SideMenu = () => {
  const Router = useRouter();
  const UserIsSignedIn = useSelector(
    (state: any) => state.UserSignIn.UserIsSignedIn
  );
  const dispatch = useDispatch();
  const handelToggleMenu = () => {
    dispatch(ToggleMenu());
  };
  const HandelClick = (link: any) => {
    Router.push(link);
    handelToggleMenu();
  };
  const dropDownItems = [
    { name: "Tours", link: "/tours" },
    { name: "Excursions", link: "/excursions" },
    { name: "Destinations", link: "/destinations" },
    { name: "Contact", link: "/contact" },
    { name: "Log-in" },
    { name: "Sing-up" },
    { name: "History" },
    { name: "Setting" },
    { name: " Terms & Conditions", link: "terms-and-onditions" },
    { name: " Privacy Policy", link: "privacy-policy" },
    { name: "Cookies", link: "cookies" },
  ];
  const first = dropDownItems.slice(0, 4);
  const second = dropDownItems.slice(5, 8);
  const last = dropDownItems.slice(8, 11);
  return (
    <div className={Style.container}>
      <div className={Style.main_containet}>
        <div className={Style.menu_container}>
          <div className={Style.container_search}>
            <SearchInput />
          </div>
          <div className={Style.container_secoond}>
            <div className={Style.modal_container}>
              {first.map(({ name, link }: any) => (
                <div
                  onClick={() => {
                    link && HandelClick(link);
                  }}
                  className={Style.link_container}
                >
                  <HeaderText Text={name} />
                </div>
              ))}
            </div>

            <div className={Style.modal_container}>
              {second.map(({ name, link }: any) => (
                <div
                  onClick={() => {
                    link && HandelClick(link);
                  }}
                  className={Style.link_container}
                >
                  <HeaderText
                    Text={name}
                    // TextName={"text_flex_start_normal"}
                  />
                </div>
              ))}
            </div>

            <div className={Style.modal_container}>
              {last.map(({ name, link }: any) => (
                <div
                  onClick={() => {
                    link && HandelClick(link);
                  }}
                  className={Style.link_container}
                >
                  <HeaderText
                    Text={name}
                    // TextName={"text_flex_start_normal"}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div onClick={handelToggleMenu} className={Style.rest_container}>
          <span className={Style.meun}>
            <IoCloseCircleOutline />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
