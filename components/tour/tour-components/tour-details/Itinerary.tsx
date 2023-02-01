import React from "react";
import Style from "../../../../styles/pages/tour/tour-components/tour-details/itinerary.module.css";
import { TitlesHeads } from "../../../modals/TitlesHeads";
import EachDay from "./EachDay";

const Itinerary = ({ tourData }: any) => {
  return (
    <div className={Style.container}>
      <TitlesHeads Head={"Itinerary"} HeadName="head_4_bold" />
      <div className={Style.days_container}>
        
      </div>
      {tourData?.days?.length
        ? tourData?.days.map((item: any, index: Number) => {
            if (index == tourData?.days?.length - 1) {
              return <EachDay dayData={item} isFirst={false} isLast={true} />;
            } else {
              return <EachDay dayData={item} isFirst={true} isLast={false} />;
            }
          })
        : null}
    </div>
  );
};

export default Itinerary;
