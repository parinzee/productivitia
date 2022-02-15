import * as React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer(): JSX.Element {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200 dark:border-gray-600">
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a
                href="https://twitter.com/parinzee"
                className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out h-8 w-8"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </li>
            <li className="ml-4">
              <a
                href="https://github.com/parinzee/"
                className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out h-8 w-8"
                aria-label="Github"
              >
                <FaGithub />
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">
            Made by{" "}
            <a
              href="https://github.com/parinzee"
              className="text-purple-600 hover:underline"
            >
              Parinthapat Pengpun
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
