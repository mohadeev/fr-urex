import { IoImageOutline } from "@react-icons/all-files/io5/IoImageOutline";
import Style from "../../styles/modals/image.module.css";
import React, { useState, useRef, useEffect } from "react";

export const Image100 = ({ Bg }: any) => {
  return (
    <div
      style={{
        backgroundImage: `url(${
          process.env.NEXT_PUBLIC_BACK_END_URL + "/api/get/read/images/" + Bg
        })`,
      }}
      className={Style.container}
    ></div>
  );
};
