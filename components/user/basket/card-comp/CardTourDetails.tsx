import React from "react";
// import Style from "../../../../styles/pages/user/basket/card-comp/card-tour-details.module.css";
import Style from "../../../../styles/pages/user/card/card-comp/card-tour-details.module.css";
import { NormalTitlesMedum, TitlesHeads } from "../../../modals/TitlesHeads";
import { BsStarFill } from "@react-icons/all-files/bs/BsStarFill";
import { IoCalendarOutline } from "@react-icons/all-files/io5/IoCalendarOutline";
import { IoCarOutline } from "@react-icons/all-files/io5/IoCarOutline";
import { IoMdPhonePortrait } from "@react-icons/all-files/io/IoMdPhonePortrait";
import { IoChatbubblesOutline } from "@react-icons/all-files/io5/IoChatbubblesOutline";
import { IoPeopleOutline } from "@react-icons/all-files/io5/IoPeopleOutline";
import { ImCancelCircle } from "@react-icons/all-files/im/ImCancelCircle";
import { IoTimeOutline } from "@react-icons/all-files/io5/IoTimeOutline";
import { IoTrashSharp } from "@react-icons/all-files/io5/IoTrashSharp";

import { ParagraphsP } from "../../../modals/NormalText";
import { removeFromBasket } from "../../../../redux/basket-slice/BasketSlice";
import { useDispatch } from "react-redux";

const CardTourDetails = ({ DestData }: any) => {
  const TourDataItems = [
    {
      name: "Duration: " + DestData?.days?.length + " Days",
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
  const stars = 5 + DestData?.reviews?.length;
  const repeat = Array(stars)
    .fill(0)
    .map((_, i) => (
      <i key={i}>
        <BsStarFill />
      </i>
    ));
  const dispatch = useDispatch();
  return (
    <div className={Style.container}>
      <div
        style={{
          backgroundImage: `url(${
            DestData?.images?.length &&
            process.env.NEXT_PUBLIC_BACK_END_URL +
              "/api/get/read/images/" +
              DestData?.images[0]
          })`,
        }}
        className={Style.image}
      ></div>
      <div className={Style.tour_data}>
        <NormalTitlesMedum Head={DestData?.name} />
        <div className={Style.rating_container}>
          {DestData?.reviews?.length} <p className={Style.stars}>{repeat}</p>
          {DestData?.reviews?.length}
        </div>
        {TourDataItems.map(({ name, icon }) => (
          <div className={Style.data_container}>
            <i className={Style.icon}>{icon}</i>
            <ParagraphsP Text={name} />
          </div>
        ))}
      </div>
      <div className={Style.price_details}>
        <button
          onClick={() => dispatch(removeFromBasket({ id: DestData?._id }))}
        >
          <IoTrashSharp />
        </button>

        <ParagraphsP Text={DestData?.price} />
      </div>
    </div>
  );
};

export default CardTourDetails;
