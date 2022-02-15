import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export default function HeroHome(): JSX.Element {
  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="dark:text-slate-50 text-6xl md:text-8xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Dramaticially increase{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-400">
                Productivity
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-2xl text-gray-600 dark:text-gray-400 mb-8">
                A beautiful startpage that gamifies your life and alows you to
                get more things done.
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                <Link href="/signup">
                  <a className="btn text-white bg-purple-500 w-full mb-4 sm:w-auto sm:mb-0 shadow-lg hover:shadow-xl shadow-purple-600/50">
                    Start Now for Free
                  </a>
                </Link>
                <div>
                  <a
                    className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                    href="#0"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div className="relative flex justify-center mb-8">
              <div className="flex flex-col justify-center dark:border-2 dark:border-gray-800 shadow-md shadow-pink-500 rounded-lg">
                <Image
                  className="mx-auto rounded-lg"
                  src="icons/windows11/Wide310x150Logo.scale-400.png"
                  width="768"
                  height="432"
                  alt="Hero"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
