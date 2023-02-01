import React, { useState } from "react";
import { IoMailOpenOutline } from "@react-icons/all-files/io5/IoMailOpenOutline";
import Style from "../../../styles/layout/footer/footer-components/news-latter.module.css";
import basedPostUrlRequest from "../../../utils/basedPostUrlRequest";
import { poPUppRedcuer } from "../../../redux/style-slice/general-style/GenrealStyle";
import { useDispatch } from "react-redux";

const NewsLatter = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const handleSubmet = async (e: any) => {
    const body: any = {
      email,
    };
    await basedPostUrlRequest("/api/post/contact/news-latter", body).then(
      () => {
        dispatch(poPUppRedcuer({ data: "you emaill was addec thank you" }));
        setTimeout(() => {
          dispatch(poPUppRedcuer({ data: "" }));
        }, 10000);
      }
    );
  };
  return (
    <div className={Style.container}>
      <div className={Style.newslatter_container}>
        <p className={Style.newslatter}>Newsletter:</p>
      </div>
      <p className={Style.first_p}>
        <strong className={Style.first_strong}>
          Get the best deals on Active adventures!
        </strong>
        <small className={Style.first_small}>
          Be the first to hear about the best Active adventure package deals,
          straight to your inbox.
        </small>
      </p>
      <div className={Style.news_latter_form_container}>
        <div className={Style.form}>
          <IoMailOpenOutline />
          <input
            onChange={(e: any) => {
              setEmail(e.target.value);
            }}
            type="text"
            placeholder="Email"
          />
          <button onClick={handleSubmet}>Subscribe</button>
        </div>
        <small className={Style.second_small}>
          By submitting this form, I agree to the urexcursion T&Cs and Privacy
          policy.
        </small>
      </div>
    </div>
  );
};

export default NewsLatter;
