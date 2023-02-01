import { GetServerSideProps } from "next";
import React from "react";

const partner = () => {
  return <div></div>;
};

export default partner;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query } = ctx;
  console.log(query);
  return {
    redirect: {
      permanent: false,
      destination: "/",
    },
    props: {},
  };
};
