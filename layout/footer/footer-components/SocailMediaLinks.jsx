import React from "react";
import { NormalTitlesMedum } from "../../../components/modals/TitlesHeads";
import Style from "../../../styles/layout/footer/footer-components/socail-media-links.module.css";
import { AiOutlineFacebook } from "@react-icons/all-files/ai/AiOutlineFacebook";
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";
import { AiOutlineLinkedin } from "@react-icons/all-files/ai/AiOutlineLinkedin";

import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { ImPinterest2 } from "@react-icons/all-files/im/ImPinterest2";

const SocailMediaLinks = () => {
  const path = "/payment-methods/";
  const Images = [
    <AiOutlineFacebook />,
    <AiOutlineInstagram />,
    <AiOutlineTwitter />,
    <ImPinterest2 />,
    <AiOutlineLinkedin />,
  ];
  return (
    <div className={Style.container}>
      {/* <NormalTitlesMedum Head={} HeadName="m_t" /> */}
      <div className={Style.images_container}>
        {Images.map((Img, index) => (
          <div className={Style.img} key={index}>
            <span className={Style.icons_name}>{Img}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocailMediaLinks;
