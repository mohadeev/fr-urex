import React, { useState, useEffect } from "react";
import allDestinationsFetch from "../../../utils/allDestinationsFetch";
import { DropDown } from "../../modals/DropDown";
import { InputStart } from "../../modals/Inputs";

const StartPlsEnd = () => {
  const [destt, setDestt] = useState([]);
  useEffect(() => {
    const localFetch = async () => {
      const allDest: any = await allDestinationsFetch();
      //console.log(allDest);
      if (allDest && allDest.responseData.length) {
        setDestt(allDest.responseData);
      }
    };
    localFetch();
  }, []);

  return (
    <>
      <DropDown
        MessageRedux="start"
        DropDownArray={destt}
        TextTop={"Start Location"}
      />
      <DropDown
        MessageRedux="end"
        DropDownArray={destt}
        TextTop={"End Location"}
      />
    </>
  );
};

export default StartPlsEnd;
