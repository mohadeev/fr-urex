import Style from "../../styles/modals/services.module.css";
import React, { useEffect, useState, useRef } from "react";
import { IoCalendarOutline } from "@react-icons/all-files/io5/IoCalendarOutline";
import { IoCarOutline } from "@react-icons/all-files/io5/IoCarOutline";
import { IoMdPhonePortrait } from "@react-icons/all-files/io/IoMdPhonePortrait";
import { IoChatbubblesOutline } from "@react-icons/all-files/io5/IoChatbubblesOutline";
import { IoPeopleOutline } from "@react-icons/all-files/io5/IoPeopleOutline";
import { IoTimeOutline } from "@react-icons/all-files/io5/IoTimeOutline";
import { IoCloseOutline } from "@react-icons/all-files/io5/IoCloseOutline";
import { BiHotel } from "@react-icons/all-files/bi/BiHotel";
import { FaMapSigns } from "@react-icons/all-files/fa/FaMapSigns";
import { IoRestaurantOutline } from "@react-icons/all-files/io5/IoRestaurantOutline";
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";
import { IoTicketOutline } from "@react-icons/all-files/io5/IoTicketOutline";

const Services = ({ tourData }: any) => {
  const TourDataItems = [
    {
      name: "Tours",
      icon: <FaMapSigns />,
      text: "Check availability to see starting times.",
    },
    {
      name: "Hoteles",
      icon: <BiHotel />,
      text: "Check availability to see starting times.",
    },
    { name: "Transport", icon: <IoCarOutline /> },
    { name: "Mobile ticket", icon: <IoMdPhonePortrait /> },
    { name: "Things to do", icon: <IoTicketOutline /> },
    {
      name: "Restaurantes",
      icon: <IoRestaurantOutline />,
      text: "Cancel up to 24 hours in advance to receive a full refund",
    },

    { name: "Vacation Rentals", icon: <AiOutlineHome /> },
  ];
  return (
    <ul className={Style.container}>
      {TourDataItems.map(({ name, icon }) => (
        <li className={Style.data_container}>
          <i className={Style.icon}>{icon}</i>
          <span className={Style.data}>{name}</span>
        </li>
      ))}
    </ul>
  );
};

export default Services;
