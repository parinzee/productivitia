import type { NextPage } from "next";
import Head from "next/head";
import * as React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackgroundVideo from "../../components/app/BackgroundVideo";
import Dashboard from "../../components/app/Dashboard";
import useTimedBg from "../../hooks/useTimedBg";

const Startpage: NextPage = () => {
  // Select a random gif from our /public/backgrounds/webm folder
  const selectedBg = useTimedBg();
  return (
    <>
      <Head>
        <title>Productivitia - Startpage</title>
      </Head>
      {/* This part will only be rendered client-side */}
      {typeof window === "undefined" ? null : (
        <>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            toastClassName="text-base font-bold"
          />
          <BackgroundVideo pathToVideo={selectedBg} type="video/webm" />
          <div className="fixed w-screen h-screen flex items-center content-center justify-center bg-transparent">
            <Dashboard />
          </div>
        </>
      )}
    </>
  );
};

export default Startpage;
