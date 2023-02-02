import React from "react";
import Style from "../../../../styles/pages/tour/tour-components/tour-details/overview-highlites-places.module.css";
import DestinationsSamllCard from "../../../destinations/destinations-components/DestinationsSamllCard";
import { ParagraphsP } from "../../../modals/NormalText";
import { TitlesHeads } from "../../../modals/TitlesHeads";

const OverviewHighlitesPlaces = ({ tourData }: any) => {
  const Overview =
    "Discover the Berber villages of the Atlas Mountains on a full-day trip from Marrakech that explores broad valleys and lush orchards with views of Mount Toubkal, the highest peak in North Africa. Ride a camel through a broad gorge, pause for tea in Imlil Valley, then hike to the isolated village of Ait Souka to share a meal in a Berber family’s home. Throughout the day, take in the mountains’ beautiful scenery: terraced gardens that climb steep hillsides, tumbling waterfalls, and an alpine kasbah.";
  return (
    <div className={Style.container}>
      <TitlesHeads Head={"Places You’ll See"} HeadName="head_4_bold" />
      <div className={Style.places}>
        <DestinationsSamllCard />
        <DestinationsSamllCard />
        <DestinationsSamllCard />
        <DestinationsSamllCard />
        <DestinationsSamllCard />
      </div>
      <b className={Style.title}></b>
      <div className={Style.container_highlits}>
        <TitlesHeads Head={"Overview"} HeadName="head_4_bold" />
        <div className={Style.div_shadow_container}>
          <ParagraphsP
            Text={tourData?.overview}
            TextName={"text_flex_start_normal"}
          />
          {/* <div className={Style.div_shadow_container_bottom}></div> */}
        </div>
      </div>
    </div>
  );
};

export default OverviewHighlitesPlaces;
