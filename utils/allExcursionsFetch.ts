import basedGetUrlRequest from "./basedGetUrlRequest";

const allExcursionsFetch = async () => {
  return await basedGetUrlRequest("/api/get/all-excursions");
};

export default allExcursionsFetch;
