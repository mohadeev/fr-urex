import { GetServerSideProps } from "next";
import React from "react";
import ExcursionsPage from "../components/tours/ExcursionsPage";
import allExcursionsFetch from "../utils/allExcursionsFetch";

const excursions = ({ data }: any) => {
  return <ExcursionsPage tours={data} />;
};
//allExcursionsFetch;
export default excursions;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let data = {};
  await allExcursionsFetch().then((dataRes: any) => {
    if (dataRes && dataRes.responseData) {
      data = dataRes.responseData;
    }
  });
  console.log(data);

  return {
    props: { data },
  };
};
