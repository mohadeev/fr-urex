import React, { useEffect, useState } from "react";
import DestinationsCard from "./destinations-components/DestinationsCard";
import Style from "../../styles/pages/destinations/destinations.module.css";
import basedGetUrlRequest from "../../utils/basedGetUrlRequest";
const DestinationsPage = () => {
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    const locaFetch = async () => {
      await basedGetUrlRequest("/api/get/all-destinations").then(
        (dataRes: any) => {
          console.log(dataRes);
          if (dataRes && dataRes.responseData) {
            setDestinations(dataRes.responseData);
          }
        }
      );
    };
    locaFetch();
  }, []);

  return (
    <div className={Style.container}>
      <div className={Style.destinations_container}>
        {destinations.length
          ? destinations.map((item) => <DestinationsCard DestData={item} />)
          : null}
      </div>
    </div>
  );
};

export default DestinationsPage;
