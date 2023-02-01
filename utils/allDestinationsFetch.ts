import basedGetUrlRequest from "./basedGetUrlRequest";

const allDestinationsFetch = async () => {
  return await basedGetUrlRequest("/api/get/all-destinations");
};

//
export default allDestinationsFetch;
