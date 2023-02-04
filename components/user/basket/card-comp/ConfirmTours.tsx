import React from "react";
// import Style from "../../../../styles/pages/user/basket/card-comp/card-tour-details.module.css";
import Style from "../../../../styles/pages/user/card/card-comp/confirm-tours.module.css";
import { NormalTitlesMedum, TitlesHeads } from "../../../modals/TitlesHeads";
import { BsStarFill } from "@react-icons/all-files/bs/BsStarFill";
import { IoCalendarOutline } from "@react-icons/all-files/io5/IoCalendarOutline";
import { IoCarOutline } from "@react-icons/all-files/io5/IoCarOutline";
import { IoMdPhonePortrait } from "@react-icons/all-files/io/IoMdPhonePortrait";
import { IoChatbubblesOutline } from "@react-icons/all-files/io5/IoChatbubblesOutline";
import { IoPeopleOutline } from "@react-icons/all-files/io5/IoPeopleOutline";
import { ImCancelCircle } from "@react-icons/all-files/im/ImCancelCircle";
import { IoTimeOutline } from "@react-icons/all-files/io5/IoTimeOutline";
import { ParagraphsP } from "../../../modals/NormalText";
import { SkinyText } from "../../../modals/SkinyText";
import { useSelector } from "react-redux";

const ConfirmTours = () => {
  const baskeServices = useSelector(
    (state: any) => state.basketReducer.cardBasket
  );
  console.log(baskeServices);
  const SubTotal = baskeServices.map((iteem: any) => parseInt(iteem.price));
  const SubTotalLater = SubTotal.reduce((a: any, b: any) => a + b, 0);
  console.log(SubTotal, SubTotalLater);
  const TourDataItems = [
    {
      name: "Duration: " + 4 + " Days",
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
  const repeat = Array(5)
    .fill(0)
    .map((_, i) => (
      <i key={i}>
        <BsStarFill />
      </i>
    ));
  return (
    <div className={Style.container}>
      <div className={Style.price_details}>
        <div>
          <ParagraphsP Text={"Total (1 item):"} />
        </div>
        <div className={Style.text_small}>
          <NormalTitlesMedum HeadName="big_strong" Head={SubTotalLater} />
          <SkinyText Text={"Total (1 item):"} />
        </div>
      </div>
      <button className={Style.search_button}>Checkout</button>
      <button className={Style.search_button_border}>
        Reserve now & pay later
      </button>
    </div>
  );
};

export default ConfirmTours;
