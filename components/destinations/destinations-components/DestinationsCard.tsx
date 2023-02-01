import React from "react";
import Style from "../../../styles/pages/destinations/destinations-card.module.css";
import { IoLocationOutline } from "@react-icons/all-files/io5/IoLocationOutline";

// const Bg =
//   "https://morokotour.vercel.app/images/ait-ben-haddou-images/ourzazate-aitbenhadou3.jpg";
const Desc =
  "Like the cities of Fez, Rabat and Meknes, Marrakech has the privilege of being a Makhzen city, i.e. imperial, and the successive dynasties that have populated it have enriched it. It also enjoys a special prestige: that of giving its name to the whole country. Marrakech is listed as one of the most important cultural centers of Morocco.";
const DestinationsCard = ({ DestData }: any) => {
  const Bg = DestData?.images[0];
  return (
    <div className={Style.container}>
      <div
        className={Style.container_img}
        style={{
          backgroundImage: `url(${
            process.env.NEXT_PUBLIC_BACK_END_URL + "/api/get/read/images/" + Bg
          })`,
        }}
      ></div>
      <div className={Style.container_desc}>
        <b className={Style.title}>
          <IoLocationOutline />
          {DestData?.name} - {DestData?.country}
        </b>
        <p className={Style.desc}>
          {DestData?.description?.slice(0, 100) + "..."}
        </p>
      </div>
    </div>
  );
};

export default DestinationsCard;
