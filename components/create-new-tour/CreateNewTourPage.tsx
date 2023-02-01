import React, { useState, useEffect, useRef } from "react";
import Style from "../../styles/pages/create-new-tour.module.css";

import OverViewTitle from "./create-new-tour-comp/OverViewTitle";
import Pricing from "./create-new-tour-comp/Pricing";
import StartPlsEnd from "./create-new-tour-comp/StartPlsEnd";
import AddTourDays from "./create-new-tour-comp/AddTourDays";

const CreateNewTourPage = () => {
  return (
    <div className={Style.container}>
      <OverViewTitle />
      <Pricing />
      <StartPlsEnd />
      <AddTourDays />
    </div>
  );
};

export default CreateNewTourPage;
