import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import React from "react";
import ToursPage from "../../components/tours/ToursPage";
import allToursFetch from "../../utils/allToursFetch";

const tours = ({ data }: any) => {
  return <ToursPage tours={data} />;
};

export default tours;
//
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let data = {};
  await allToursFetch().then((dataRes: any) => {
    if (dataRes && dataRes.responseData) {
      data = dataRes.responseData;
    }
  });

  return {
    props: { data },
  };
};
