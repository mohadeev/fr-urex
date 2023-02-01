import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Home from "../components/home/Home";
import allToursFetch from "../utils/allToursFetch";

const HomePage: NextPage = ({ data }: any) => {
  return <Home Tours={data} />;
};

export default HomePage;
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
