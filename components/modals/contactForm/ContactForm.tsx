import React, { useState, useRef } from "react";
import { IoIosArrowUp } from "@react-icons/all-files/io/IoIosArrowUp";
import { FaCalendarCheck } from "@react-icons/all-files/fa/FaCalendarCheck";
import { FaCalendarMinus } from "@react-icons/all-files/fa/FaCalendarMinus";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";
import { FaEnvelopeOpenText } from "@react-icons/all-files/fa/FaEnvelopeOpenText";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";

// import Style from "../../styles/contactForm/contactForm.module.css"
//
import Style from "../../../styles/modals/contact-form.module.css";
import { InputDate, InputStart, TextEreaStart, InputNumber } from "../Inputs";
import { SubmiteButton } from "../Buttons";
import basedPostUrlRequest from "../../../utils/basedPostUrlRequest";

function ContactForm() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [phone, setphone] = useState("");
  const [subject, setsubject] = useState("");
  const [dayOfAriving, setdayOfAriving] = useState("");
  const [dayOfDuparture, setdayOfDuparture] = useState("");
  const [adults, setadults] = useState(0);
  const [childs, setchilds] = useState(0);
  const [MessageSent, setMessageSent] = useState(false);
  const divRif = useRef();
  //   const ShowAtt = () => {
  //     divRif.current.style.display = "flex"
  //   }
  const AllFormData = (e: any) => {
    if (e.target.id === "name") {
      setname(e.target.value);
    } else if (e.target.id === "email") {
      setemail(e.target.value);
    } else if (e.target.id === "phone") {
      setphone(e.target.value);
    } else if (e.target.id === "subject") {
      setsubject(e.target.value);
    } else if (e.target.id === "adults") {
      setadults(e.target.value);
    } else if (e.target.id === "childs") {
      setchilds(e.target.value);
    } else if (e.target.id === "date-start") {
      setdayOfAriving(e.target.value);
    } else if (e.target.id === "date-end") {
      setdayOfDuparture(e.target.value);
    } else if (e.target.id === "message") {
      setmessage(e.target.value);
    }
  };
  //   const resetForm = () => {
  //     setTimeout(() => {
  //       setSent(false)
  //     }, 3000)
  //   }
  const handleSubmet = async (e: any) => {
    e.preventDefault();
    const body: any = {
      name,
      email,
      phone,
      subject,
      message,
      dayOfAriving,
      dayOfDuparture,
      adults,
      childs,
      MessageSent,
    };
    await basedPostUrlRequest("/api/post/contact/contact-form", body);
  };
  return (
    <form className={Style.container} onSubmit={handleSubmet}>
      <InputStart
        HandelChange={(e: any) => setname(e.target.value)}
        TextTop={"Name:"}
        PlaceHolder={"name"}
      />
      <InputStart
        HandelChange={(e: any) => setemail(e.target.value)}
        TextTop={"Email:"}
        PlaceHolder={"email"}
      />
      <InputStart
        HandelChange={(e: any) => setsubject(e.target.value)}
        TextTop={"Subject:"}
        PlaceHolder={"subject"}
      />
      <InputStart
        HandelChange={(e: any) => setphone(e.target.value)}
        TextTop={"Phone:"}
        PlaceHolder={"phone"}
      />

      <div className={Style.date_div}>
        <InputDate
          TextTop={"Departing Date:"}
          HandelChange={(e: any) => setdayOfAriving(e.target.value)}
        />
        <InputDate
          TextTop={"Returning Date:"}
          HandelChange={(e: any) => setdayOfDuparture(e.target.value)}
        />
      </div>
      <div className={Style.date_div}>
        <InputNumber
          TextTop={"Adults:"}
          HandelChange={(e: any) => setadults(e.target.value)}
        />
        <InputNumber
          TextTop={"kids:"}
          HandelChange={(e: any) => setchilds(e.target.value)}
        />
      </div>
      <TextEreaStart
        HandelChange={(e: any) => setmessage(e.target.value)}
        TextTop={"Message:"}
        PlaceHolder={"Message"}
      />
      <SubmiteButton onClick={handleSubmet} />
    </form>
  );
}

export default ContactForm;
