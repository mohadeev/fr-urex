import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Home from "../components/home/Home";
import allToursFetch from "../utils/allToursFetch";

const HomePage: NextPage = ({ mainData }: any) => {
  console.log("mainData", mainData);
  const data = mainData.length >= 1 ? mainData[0] : {};
  return (
    <>
      {data && (
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org/",
                "@type": "Product",
                name: data?.name,
                image:
                  process.env.NEXT_PUBLIC_BACK_END_URL +
                  "/api/get/read/images/" +
                  data?.images[0],
                description: data?.overview,
                brand: process.env.SITENAME,
                sku: data?._id,
                offers: {
                  "@type": "AggregateOffer",
                  url:
                    process.env.NEXT_PUBLIC_ClIENT_URL + "/tours/" + data?._id,
                  priceCurrency: "EUR",
                  lowPrice: data?.price / 1.4,
                  highPrice: data?.price,
                  offerCount: "23",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "5",
                  bestRating: "5",
                  worstRating: "1",
                  ratingCount: "235",
                },
              }),
            }}
          />
        </Head>
      )}
      {data && (
        <NextSeo
          title={data?.name + "|" + "Ur Excursion" + "|" + "Tours"}
          description={data?.overview}
          canonical={process.env.NEXT_PUBLIC_ClIENT_URL + "/tours/" + data?._id}
          openGraph={{
            url: "https://www.url.ie/a",
            title: data?.name,
            description: data?.name,
            images: [
              {
                url:
                  process.env.NEXT_PUBLIC_BACK_END_URL +
                  "/api/get/read/images/" +
                  data?.images[0],
                width: 800,
                height: 600,
                alt: "Og Image Alt",
                type: "image/jpeg",
              },
              {
                url:
                  process.env.NEXT_PUBLIC_BACK_END_URL +
                  "/api/get/read/images/" +
                  data?.images[0],
                width: 900,
                height: 800,
                alt: "Og Image Alt Second",
                type: "image/jpeg",
              },
              {
                url:
                  process.env.NEXT_PUBLIC_BACK_END_URL +
                  "/api/get/read/images/" +
                  data?.images[0],
              },
              {
                url:
                  process.env.NEXT_PUBLIC_BACK_END_URL +
                  "/api/get/read/images/" +
                  data?.images[0],
              },
            ],
            site_name: process.env.NEXT_PUBLIC_ClIENT_URL,
          }}
          twitter={{
            handle: "@handle",
            site: "@site",
            cardType: "summary_large_image",
          }}
        />
      )}
      <Home Tours={mainData} />;
    </>
  );
};

export default HomePage;
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let data: any = [];
  await allToursFetch().then((dataRes: any) => {
    if (dataRes && dataRes.responseData) {
      data = dataRes.responseData;
    }
  });
  // console.log("data", data.length);
  return {
    props: { mainData: data },
  };
};
