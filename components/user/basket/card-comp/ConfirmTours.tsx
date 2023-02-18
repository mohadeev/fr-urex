import React, { useEffect, useState } from "react";
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
import { PayPalButtons } from "@paypal/react-paypal-js";
import basedPostUrlRequest from "../../../../utils/basedPostUrlRequest";
import io from "socket.io-client";

const ConfirmTours = () => {
  const socket = io(process.env.NEXT_PUBLIC_BACK_END_URL!, {
    transports: ["websocket", "polling"],
  });
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
  const handelCheckout = async () => {
    // const body: any = { price: SubTotalLater };
    const itemsIds: any = [];
    baskeServices.map((itm: any) => {
      itemsIds.push({ id: itm._id });
    });

    socket.emit("pay", { price: 2, itemsToPay: itemsIds });

    // try {
    //   await basedPostUrlRequest("/pay", body).then(async (data) => {
    //     console.log("data", data);
    //     // alert("data");
    //     // window.open(data.paymentUrl);
    //     window.open(
    //       data.paymentUrl,
    //       "_blank",
    //       "resizable=yes, scrollbars=yes, titlebar=yes, width=800, height=900, top=10, left=10"
    //     );
    //   });
    // } catch (error) {}
  };
  let myWindow: any;
  const [IsOpendWindow, setIsOpendWindow] = useState(false);
  function openWin(url: any) {
    setIsOpendWindow(true);
    myWindow = window.open(
      url,
      "_blank",
      "resizable=yes, scrollbars=yes, titlebar=yes, width=800, height=900, top=10, left=10"
    );
  }

  function closeWin() {
    myWindow.close();
  }
  useEffect(() => {
    socket.on("payment-generated", (data) => {
      if (data && !IsOpendWindow) {
        alert("here");
        openWin(data.paymentUrl);
      }
    });
    socket.on("payment-successflly-maded", (data) => {
      alert("here" + data);
      if (data?.payment) {
        alert(data?.payment);
        closeWin();
        // openWin(data.payment);
      }
    });
  }, [socket]);

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
      {socket?.id}
      <button onClick={handelCheckout} className={Style.search_button}>
        Checkout
      </button>
      <button className={Style.search_button_border}>
        Reserve now & pay later
      </button>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "1",
                },
              },
            ],
          });
        }}
        onApprove={(data: any, actions: any) => {
          return actions.order.capture().then((details: any) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
          });
        }}
      />
    </div>
  );
};

export default ConfirmTours;
