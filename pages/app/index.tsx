import type { NextPage } from "next";
import Head from "next/head";
import * as React from "react";
import useRandGif from "../../hooks/useRandGif";

const Startpage: NextPage = () => {
  // Selected a random gif from our /public/backgrounds folder
  const selectedBg = useRandGif();
  return (
    <>
      {typeof window === "undefined" ? null : (
        <div
          className="flex flex-col h-full bg-cover bg-no-repeat"
          style={{
            background: `url(/backgrounds/${selectedBg}) no-repeat`,
            backgroundSize: "cover",
          }}
        >
          <Head>
            <title>Productivitia - Startpage</title>
          </Head>
        </div>
      )}
    </>
  );
};

export default Startpage;