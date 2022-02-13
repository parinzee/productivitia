import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import logo from "../../public/icons/Nobg-1024.png";

export default function Header() {
  const [top, setTop] = React.useState(true);

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
        !top && "bg-white backdrop-blur-sm shadow-lg"
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
                  src={logo}
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
                <Link href="/signin">
                  <a className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                    Sign in
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/signup">
                  <a className="px-3 py-2 shadow text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3 rounded">
                    Sign up
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
