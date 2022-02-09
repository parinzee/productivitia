import type { NextPage } from "next";
import Head from "next/head";
import * as React from "react";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          Productivitia - Gamify your life to improve productivity with a start
          page.
        </title>
        <meta
          name="description"
          content="A startpage with an aim of helping you to improve productivity."
        />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
