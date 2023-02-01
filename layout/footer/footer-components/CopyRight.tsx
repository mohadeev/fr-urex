import Link from "next/link";
import React from "react";
import Style from "../../../styles/layout/footer/footer-components/copy-right.module.css";
import LangAndCurrency from "../../header/header-components/LangAndCurrency";
import Flag from "react-world-flags";
import { Lang } from "../../../components/modals/LangCurrency";
import { ParagraphsP } from "../../../components/modals/NormalText";

const CopyRight = () => {
  const QuickLinks = [
    { name: " Terms & Conditions", link: "terms-and-onditions" },
    { name: " Privacy Policy", link: "privacy-policy" },
    { name: "Cookies", link: "cookies" },
  ];

  return (
    <div className={Style.container}>
      <div className={Style.req_data}>
        <Lang NoEffect={true} />
      </div>

      <ul className={Style.container_ul}>
        {QuickLinks.map(({ name, link }) => (
          <li className={Style.li} key={link}>
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>
      <ul className={Style.container_ul}>
        <li className={Style.li}>
          <ParagraphsP
            Text={"All Right Resrved © 2022. Powered by Ur Excursion"}
            TextName={"text_flex_start_normal"}
          />
        </li>
      </ul>
    </div>
  );
};

export default CopyRight;
