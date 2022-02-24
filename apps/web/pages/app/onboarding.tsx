import type { NextPage } from "next";
import Head from "next/head";
import * as React from "react";
import BackgroundVideo from "../../components/app/BackgroundVideo";
import OnboardingForm from "../../components/app/OnboardingForm";
import useTimedBg from "../../hooks/useTimedBg";

const Onboarding: NextPage = () => {
  // Select a random gif from our /public/backgrounds/webm folder
  const selectedBg = useTimedBg();
  const [isMobile, setMobile] = React.useState(false);
  React.useEffect(() => {
    // setMobile(window.matchMedia("only screen and (max-width: 760px)").matches);
    setMobile(screen.availWidth <= 800 || screen.availHeight <= 650);
  }, []);
  return (
    <>
      <Head>
        <title>Productivitia - Onboarding</title>
      </Head>
      <BackgroundVideo pathToVideo={selectedBg} type="video/webm" />
      {isMobile ? (
        <div className="fixed glass w-screen h-screen flex flex-col items-center content-center">
          <div className="my-auto text-center bg-transparent">
            <h1 className="text-4xl font-bold">Sorry!🙇</h1>
            <h2 className="text-2xl mt-2">
              <b>Please login from another device,</b>
              {" \n"}this screen size is currently not supported.
            </h2>
          </div>
        </div>
      ) : (
        <div className="fixed w-screen h-screen flex items-center content-center justify-center bg-transparent">
          <div className="glass-box w-3/4 h-4/6 flex flex-col mx-auto my-auto overflow-auto">
            <OnboardingForm />
          </div>
        </div>
      )}
    </>
  );
};

export default Onboarding;
