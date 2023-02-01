import basedGetUrlRequest from "./basedGetUrlRequest";

const allToursFetch = async () => {
  return await basedGetUrlRequest("/api/get/all-tours");
};

export default allToursFetch;
