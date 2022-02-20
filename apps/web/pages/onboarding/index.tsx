import type { NextPage } from "next";
import Head from "next/head";
import * as React from "react";
import BackgroundVideo from "../../components/app/BackgroundVideo";
import useTimedBg from "../../hooks/useTimedBg";

const Onboarding: NextPage = () => {
  // Select a random gif from our /public/backgrounds/webm folder
  const selectedBg = useTimedBg();
  return (
    <>
      <Head>
        <title>Productivitia - Startpage</title>
      </Head>
      <BackgroundVideo pathToVideo={selectedBg} type="video/webm" />
    </>
  );
};

export default Onboarding;
