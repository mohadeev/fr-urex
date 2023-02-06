import React from "react";
import HomeSearch from "./HomeSearch";
import Style from "../../styles/pages/home/home.module.css";
import RlatedTours from "../tour/tour-components/other/RlatedTours";
import Testimonial from "./Testimonial";
import Taggs from "../modals/Taggs";
import HomeImage from "./HomeImage";
import Services from "../modals/Services";

const Home = ({ Tours }: any) => {
  return (
    <div className={Style.container}>
      <HomeSearch />
      <Services />
      <RlatedTours
        Text="Our favorite experiences worldwide..."
        Tours={Tours.slice(0, 4)}
      />
      <Testimonial />
      <Taggs />
      <HomeImage />
    </div>
  );
};

export default Home;
