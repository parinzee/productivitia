import type { NextPage } from "next";
import Head from "next/head";
import * as React from "react";
import BackgroundVideo from "../../components/app/BackgroundVideo";
import useRandBack from "../../hooks/useRandBack";

const Startpage: NextPage = () => {
  // Select a random gif from our /public/backgrounds/webm folder
  const selectedBack = useRandBack();
  return (
    <>
      <Head>
        <title>Productivitia - Startpage</title>
      </Head>
      {typeof window === "undefined" ? null : (
        <>
          <BackgroundVideo pathToVideo={selectedBack} type="video/webm" />
        </>
      )}
    </>
  );
};

export default Startpage;
