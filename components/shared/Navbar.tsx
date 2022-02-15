import Link from "next/link";
import * as React from "react";
import { FaCog, FaGamepad, FaHome } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="glass absolute right-0 left-0 my-3 mx-auto flex h-14 w-1/2 flex-row items-center px-0.5">
      <Link href="/app/">
        <a>
          <FaHome className="text-white text-lg" />
        </a>
      </Link>
      <Link href="/app/account">
        <a>
          <FaGamepad color="white" />
        </a>
      </Link>
      <Link href="/app/settings">
        <a>
          <FaCog color="white" />
        </a>
      </Link>
    </div>
  );
}
