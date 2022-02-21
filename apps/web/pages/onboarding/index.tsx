import type { NextPage } from "next";
import Head from "next/head";
import * as React from "react";
import BackgroundVideo from "../../components/app/BackgroundVideo";
import useTimedBg from "../../hooks/useTimedBg";

const Onboarding: NextPage = () => {
  // Select a random gif from our /public/backgrounds/webm folder
  const selectedBg = useTimedBg();
  const [isMobile, setMobile] = React.useState(false);
  React.useEffect(() => {
    // setMobile(window.matchMedia("only screen and (max-width: 760px)").matches);
    setMobile(screen.availWidth <= 800);
  }, []);
  return (
    <>
      <Head>
        <title>Productivitia - Onboarding</title>
      </Head>
      <BackgroundVideo pathToVideo={selectedBg} type="video/webm" />
      {isMobile ? (
        <div className="fixed glass w-screen h-screen flex flex-col items-center content-center">
          <div className="my-auto text-center dark:text-slate-200 bg-transparent">
            <h1 className="text-4xl font-bold">Sorry!🙇</h1>
            <h2 className="text-2xl mt-2">
              <b>Please login from a computer,</b>
              {" \n"}mobile devices are currently not supported.
            </h2>
          </div>
        </div>
      ) : (
        <div className="fixed w-screen h-screen flex items-center content-center justify-center bg-transparent">
          <div className="glass w-11/12 h-4/6 flex flex-col mx-auto my-auto rounded-2xl p-5 dark:text-slate-300">
            <h1 className="text-5xl font-bold">Almost there!</h1>
            <h2 className="text-3xl italic">Two more steps to go.</h2>
            <form className="mt-5">
              <h4 className="text-2xl">
                1. Choose your{" "}
                <span className="font-bold text-purple-600">companion!</span>
              </h4>
              <h5 className="text-xl">
                Your companion will accompany you throughout your journey of
                improving productivity.
              </h5>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Onboarding;
