import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

const backgrounds = [
  "autumn.gif",
  "beach.gif",
  "blue-shop.gif",
  "cyberpunk.gif",
  "nature.gif",
  "neon-city.gif",
  "pixel-city-chill.gif",
  "pizza.gif",
  "rain.gif",
  "shop.gif",
  "spaceship.gif",
];

const Home: NextPage = () => {
  const [selectedBg] = useState(
    backgrounds[Math.floor(Math.random() * backgrounds.length)]
  );

  return (
    <div
      className="flex flex-col h-full bg-cover bg-no-repeat"
      style={{
        background: `url(/backgrounds/${selectedBg}) no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <Head>
        <title>
          Productivitia - Gamify your life to improve productivity with a start
          page.
        </title>
        <meta
          name="description"
          content="A startpage with an aim of helping you to improve productivity."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
