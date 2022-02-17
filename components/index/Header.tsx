import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { AuthContext } from "../../stores/AuthContext";

export default function Header(): JSX.Element {
  const [top, setTop] = React.useState(true);
  const authContext = React.useContext(AuthContext);

  // detect whether user has scrolled the page down by 10px
  React.useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white dark:bg-gray-900 glass shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link href="/">
              <a className="block" aria-label="Productivitia">
                <Image
                  src="/icons/Nobg-1024.png"
                  alt="Productivitia Logo"
                  width={64}
                  height={64}
                />
              </a>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <div
                  onClick={() => authContext?.login("login")}
                  className="font-medium dark:text-gray-400 text-gray-600 dark:hover:text-gray-600 hover:cursor-pointer hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Login
                </div>
              </li>
              <li>
                <div
                  onClick={() => authContext?.login("signup")}
                  className="btn-sm px-3 py-2 shadow text-gray-200 bg-gray-900 hover:bg-gray-800 hover:cursor-pointer ml-3 rounded"
                >
                  Sign up
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
