import React from "react";
import HeaderCenter from "./HeaderCenter";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import Style from "../../styles/layout/header/header.module.css";

const Header = () => {
  return (
    <div className={Style.container}>
      <div className={Style.container_second}>
        <HeaderLeft />
        <HeaderCenter />
        <HeaderRight />
      </div>
    </div>
  );
};

export default Header;
