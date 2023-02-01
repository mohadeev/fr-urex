import Style from "../../../../styles/pages/tour/tour-components/slider-and-book-form/tour-data.module.css";
import React, { useEffect, useState, useRef } from "react";
import { IoCalendarOutline } from "@react-icons/all-files/io5/IoCalendarOutline";
import { IoCarOutline } from "@react-icons/all-files/io5/IoCarOutline";
import { IoMdPhonePortrait } from "@react-icons/all-files/io/IoMdPhonePortrait";
import { IoChatbubblesOutline } from "@react-icons/all-files/io5/IoChatbubblesOutline";
import { IoPeopleOutline } from "@react-icons/all-files/io5/IoPeopleOutline";
import { ImCancelCircle } from "@react-icons/all-files/im/ImCancelCircle";
import { IoTimeOutline } from "@react-icons/all-files/io5/IoTimeOutline";

const TourData = ({ tourData }: any) => {
  const TourDataItems = [
    {
      name: "Duration: " + tourData?.days?.length + " Days",
      icon: <IoTimeOutline />,
      text: "Check availability to see starting times.",
    },
    { name: "Possibility to Modify", icon: <IoCalendarOutline /> },
    { name: "Hotel pickup offered", icon: <IoCarOutline /> },
    { name: "Mobile ticket", icon: <IoMdPhonePortrait /> },
    { name: "Offered in: English", icon: <IoChatbubblesOutline /> },
    {
      name: "Free cancellation",
      icon: <ImCancelCircle />,
      text: "Cancel up to 24 hours in advance to receive a full refund",
    },
    { name: "Private or small groups available", icon: <IoPeopleOutline /> },
  ];
  return (
    <div className={Style.container}>
      {TourDataItems.map(({ name, icon }) => (
        <div className={Style.data_container}>
          <i className={Style.icon}>{icon}</i>
          <span className={Style.data}>{name}</span>
        </div>
      ))}
    </div>
  );
};

export default TourData;
