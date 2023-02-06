import React, { useEffect, useState, useRef } from "react";
import Style from "../../styles/pages/home/home-image.module.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoCalendarOutline } from "@react-icons/all-files/io5/IoCalendarOutline";
import { IoSearchSharp } from "@react-icons/all-files/io5/IoSearchSharp";
//ssdsd
const HomeImage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const month = startDate.getUTCMonth() + 1; //months from 1-12
  const day = startDate.getUTCDate();
  const year = startDate.getUTCFullYear();
  const newdate = day + "/" + month + "/" + year;

  const HandelChange = (date: Date) => {
    setStartDate(date);
  };

  //fg
  return <div className={Style.container}></div>;
};

export default HomeImage;
