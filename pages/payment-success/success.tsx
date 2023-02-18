import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { io } from "socket.io-client";
import basedPostUrlRequest from "../../utils/basedPostUrlRequest";
const socket = io(process.env.NEXT_PUBLIC_BACK_END_URL!, {
  transports: ["websocket", "polling"],
});
const success = () => {
  const { asPath } = useRouter();
  //   useEffect(() => {}, []);
  useEffect(() => {
    (async () => {
      // const replaced = asPath.replce("", "/payment-success/")
      const body: any = { query: window.location.href };
      //   alert(asPath);
      try {
        await basedPostUrlRequest(asPath, body).then(async (data) => {
          console.log("data", data);
          //   alert("data");
          //   window.open(data.paymentUrl);
        });
      } catch (error) {}
    })();
  }, []);

  return <div>success</div>;
};

export default success;
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  let data = {};
  console.log(query);
  if (query.paymentId) {
    socket.emit("payment-success", query);
  }
  return {
    props: { data },
  };
};
