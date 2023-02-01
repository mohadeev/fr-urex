import Link from "next/link";
import React from "react";
import Style from "../../styles/layout/header/header-compnents/header-center.module.css";
import { useRouter } from "next/router";
import LangAndCurrency from "./header-components/LangAndCurrency";
import { useSelector } from "react-redux";
import { Currency } from "../../components/modals/LangCurrency";
import SearchInput from "./header-components/SearchInput";
const HeaderCenter = () => {
  const NavLinks = [
    { name: "Tours", link: "/tours" },
    { name: "Excursions", link: "/excursions" },
    { name: "Destinations", link: "/destinations" },
    { name: "Contact", link: "/contact" },
  ];
  const { asPath } = useRouter();
  const MenuBoolean = useSelector((state: any) => state.SideMenu.MenuBoolean);

  return (
    <>
      <div className={Style.container}>
        {asPath === "/" ? (
          !MenuBoolean && (
            <ul className={Style.container_ul}>
              {NavLinks.map(({ name, link }) => (
                <li
                  className={asPath === `/${link}` ? Style.lihover : Style.li}
                  key={link}
                >
                  <Link href={link}>{name}</Link>
                </li>
              ))}
              <li className={Style.langAndCurrency}>
                <Currency />
              </li>
            </ul>
          )
        ) : (
          <SearchInput />
        )}
      </div>
    </>
  );
};

export default HeaderCenter;

{
  /* <div className={Style.container_phone}>
        {MenuBoolean && (
          <>
            <ul className={Style.container_ul}>
              {NavLinks.map(({ name, link }) => (
                <li
                  className={asPath === `/${link}` ? Style.lihover : Style.li}
                  key={link}
                >
                  <Link href={link}>{name}</Link>
                </li>
              ))}
              <li className={Style.langAndCurrency}>
                 <LangAndCurrency 

                <Currency />
              </li>
            </ul>
          </>
        )}
      </div> */
}
