import Head from "next/head";
import React, { useEffect, useState } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { NextSeo } from "next-seo";
import Style from "../styles/layout/layout.module.css";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { UserSignedIn } from "../redux/user-slice/UserSignIn";
import { WindowHeightRedcuer } from "../redux/style-slice/general-style/GenrealStyle";
import SideMenu from "./header/SideMenu";
import { PopUpp } from "../components/modals/PopUpp";
import basedGetUrlRequestLogedIn from "../utils/basedGetUrlRequestLogedIn";
import AuthSignIn from "../components/modals/auth/AuthSignIn";
import Cookie from "../components/modals/auth/Cookie";

interface main {
  children: any;
}
const Layout = ({ children }: any) => {
  const { asPath } = useRouter();
  const Router = useRouter();
  const MenuBoolean = useSelector((state: any) => state.SideMenu.MenuBoolean);
  const PopUppBoolean = useSelector((state: any) => state.GenrealStyle.popUpp);
  const useCookie = Cookies.get("use-cookie");

  const UserIsSignedIn = useSelector(
    (state: any) => state.UserSignIn.UserIsSignedIn
  );
  const formSignUp = useSelector((state: any) => state.GenrealStyle.formSignUp);
  const cookieContainer = useSelector(
    (state: any) => state.GenrealStyle.cookieContainer
  );
  const dispatch = useDispatch();
  const [Height, setHeight] = useState(800);
  useEffect(() => {
    setHeight(window.innerHeight);
    dispatch(WindowHeightRedcuer(window.innerHeight - 60));
  }, []);
  //FGsd
  useEffect(() => {
    const locaFetch = async () => {
      let UserData = Cookies.get("user");
      if (UserData) {
        var obj = JSON.parse(UserData);
        if (obj.email) {
          try {
            await basedGetUrlRequestLogedIn("/api/get/user-data/").then(
              (responseData) => {
                if (responseData?.responseData) {
                  dispatch(UserSignedIn(responseData?.responseData));
                  console.log(responseData?.responseData);
                }
              }
            );
          } catch (error) {
            console.log(error);
          }

          // dispatch(UserSignedIn(obj));
          if (
            (UserIsSignedIn && asPath === "/auth/sign-up") ||
            asPath === "/auth/sign-in"
          ) {
            Router.push("/");
          }
        }
      }
    };
    locaFetch();
  });

  return (
    <>
      <Head>
        <meta name="msvalidate.01" content="991B928EC8A7ACA0968F1F86A936ADE8" />
        <meta
          name="google-site-verification"
          content="yibYVPoNvBy-5AwG8kIKONA0FZtDKHuIstFLNFIyAVg"
        />
        <link rel="icon" href="/favicon.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9261275339248060"
          crossOrigin="anonymous"
        ></script>
        <link rel="icon" href="/favicon.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              name: "1 hours sahara quad biking Merzouga ATV Quad rental",
              image:
                "https://marrakechtourcompany.com/wp-content/uploads/2021/01/0wHUTO8OXB.jpg",
              description:
                "1 hours Sahara ATV Quad biking Adventures in Merzouga desert, it is amazing to experience your driving around the sand dunes also",
              brand: "Marrakech Tour Company",
              sku: "2387267",
              offers: {
                "@type": "AggregateOffer",
                url: "https://marrakechtourcompany.com/1-hours-sahara-atv-quad-biking-adventures-in-merzouga-desert/",
                priceCurrency: "EUR",
                lowPrice: "50",
                highPrice: "",
                offerCount: "23",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                bestRating: "5",
                worstRating: "1",
                ratingCount: "235",
              },
            }),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <div className={Style.container}>
        <Header />
        {PopUppBoolean && <PopUpp />}
        <div className={Style.children}> {children}</div>
        {MenuBoolean && <SideMenu />}
        {formSignUp && <AuthSignIn />}
        {useCookie !== "true" && cookieContainer && <Cookie />}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
