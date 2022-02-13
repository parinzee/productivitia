import type { NextPage } from "next";
import Head from "next/head";
import * as React from "react";
import Header from "../components/index/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Productivitia - Improve Productivity with a Startpage</title>
      </Head>
      <Header />
      <div className=""></div>
    </>
  );
};

export default Home;
