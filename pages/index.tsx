import type { NextPage } from "next";
import Head from "next/head";
import * as React from "react";
import Footer from "../components/index/Footer";
import Header from "../components/index/Header";
import HeroHome from "../components/index/HeroHome";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Productivitia - Improve Productivity with a Startpage</title>
      </Head>
      <div className="flex flex-col min-h-screen overflow-hidden dark:bg-black">
        <Header />
        <main className="flex-grow">
          <HeroHome />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Home;
