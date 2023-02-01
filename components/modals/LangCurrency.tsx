import React, { useEffect, useState } from "react";
import Flag from "react-world-flags";
import Style from "../../styles/modals/currency.module.css";
import basedGetUrlRequest from "../../utils/basedGetUrlRequest";
import { ParagraphsP } from "./NormalText";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";

export const Lang = ({ NoEffect }: any) => {
  const [countriesData, setCountriesData] = useState([]);
  const [contryData, setContryData] = useState("");

  useEffect(() => {
    const locaFetch = async () => {
      await basedGetUrlRequest("/countries").then((data) => {
        console.log(data);
        if (data) {
          setCountriesData(data.responseData);
          //   obj[Object.keys(obj)[0]];
          const datataa = data.responseData[3]?.json?.languages;
          //console.log();
          setContryData(datataa[Object.keys(datataa)[0]]);
        }
      });
    };
    locaFetch();
  }, []);
  const [symbolData, setSymbolData] = useState("");
  const [currenyName, setcurrenyName] = useState("");

  useEffect(() => {
    const locaFetch = async () => {
      await basedGetUrlRequest("/countries").then((data) => {
        console.log(data);
        if (data) {
          setCountriesData(data.responseData);
          const datataa = data.responseData[2]?.json?.currencies;

          setcurrenyName(Object.keys(datataa)[0]);

          setSymbolData(datataa[Object.keys(datataa)[0]]?.symbol);
        }
      });
    };
    locaFetch();
  }, []);
  return (
    <div className={NoEffect ? Style.container_affect : Style.container}>
      <div className={Style.currency}>
        <ParagraphsP Text={contryData + " " + " | " + " "} />
      </div>
      <div className={Style.currency}>
        <ParagraphsP Text={" " + " " + " " + currenyName} />
        <ParagraphsP Text={` (${symbolData})`} />
      </div>
      <IoIosArrowDown />
    </div>
  );
};

export const Currency = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [contryData, setContryData] = useState("");
  const [currenyName, setcurrenyName] = useState("");

  useEffect(() => {
    const locaFetch = async () => {
      await basedGetUrlRequest("/countries").then((data) => {
        console.log(data);
        if (data) {
          setCountriesData(data.responseData);
          //   obj[Object.keys(obj)[0]];
          const datataa = data.responseData[2]?.json?.currencies;
          //console.log();
          setcurrenyName(Object.keys(datataa)[0]);
          console.log(Object.keys(datataa));

          setContryData(datataa[Object.keys(datataa)[0]]?.symbol);
        }
      });
    };
    locaFetch();
  }, []);
  return (
    <div className={Style.container}>
      <span className={Style.currency}>
        <ParagraphsP Text={currenyName} />
      </span>{" "}
      <span className={Style.currency}>
        <ParagraphsP Text={`(${contryData})`} />
      </span>
      <IoIosArrowDown />
    </div>
  );
};
