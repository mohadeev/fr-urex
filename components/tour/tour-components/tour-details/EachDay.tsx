import React, { useEffect, useState, useRef } from "react";

import { IoFlag } from "@react-icons/all-files/io5/IoFlag";
import { IoLocation } from "@react-icons/all-files/io5/IoLocation";
import { BiRadioCircleMarked } from "@react-icons/all-files/bi/BiRadioCircleMarked";

import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";
import { IoIosArrowUp } from "@react-icons/all-files/io/IoIosArrowUp";

import Style from "../../../../styles/pages/tour/tour-components/tour-details/each-day.module.css";
interface props {
  isFirst: boolean;
  isLast: boolean;
  item: any;
}

const Itinerary = ({ isFirst, isLast, dayData }: any) => {
  const [Active, setActive] = useState(false);
  const HanndelActive = () => {
    setActive(!Active);
  };
  const TourDay =
    "Essaouira - Casablanca. Spend the next three days exploring the sights and delights of Essaouira at your own pace. Set on the rugged shores of the breezy Atlantic Coast, this charming seaside city offers a welcome respite from the hustle and bustle of Marrakech. While away the days here exploring its winding streets lined with whitewash houses, picking your way through the shops in its ancient medina, or by sitting at an ocean-facing restaurant sipping on a cup of coffee. During the warmer months why not try some water sports too, as the windy shores here offer ideal conditions for wind and kite surfing. On the evening of day 6 a private transfer will take you back to Casablanca for the night.";
  return (
    <div className={isLast ? Style.container_last : Style.container}>
      <div className={Style.icon_container}>
        <i className={Style.icon_first}>{isFirst && <IoLocation />}</i>
        <i className={Style.icon_tour}>
          {!isFirst && !isLast && <BiRadioCircleMarked />}
        </i>
        <i className={Style.icon_last}>{isLast && <IoFlag />}</i>
      </div>
      <div
        className={isLast ? Style.text_container__last : Style.text_container}
      >
        <div onClick={HanndelActive} className={Style.title_container}>
          <h3 className={Style.title}>{dayData?.name}</h3>
          {Active ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        <p className={Active ? Style.text : Style.text_hidden}>
          {dayData?.descreption}
        </p>
      </div>
    </div>
  );
};

export default Itinerary;
