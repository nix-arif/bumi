"use client";

import Container from "@/app/Container";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
  const [showNav, setShowNav] = useState(false);
  return (
    <Container>
      <div className="text-black bg-transparent py-5">
        <div className="flex items-center max-lg:justify-between max-lg:flex-row-reverse">
          <div className="flex justify-between items-center max-lg:w-full">
            <div className="lg:hidden">
              <Link
                href="#"
                className="px-2 py-[6px] border-[1px] border-black rounded-md hover:text-neutral-400"
              >
                Sign up
              </Link>
            </div>
            <Link href="https://www.facebook.com/profile.php?id=61557877825280">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                aria-labelledby="title"
                aria-describedby="desc"
                role="img"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="w-8 h-8"
              >
                <path
                  data-name="layer1"
                  d="M39.8 12.2H48V0h-9.7C26.6.5 24.2 7.1 24 14v6.1h-8V32h8v32h12V32h9.9l1.9-11.9H36v-3.7a3.962 3.962 0 0 1 3.8-4.2z"
                  fill="blue"
                ></path>
              </svg>
            </Link>
            <button type="button" onClick={() => setShowNav(!showNav)}>
              <div
                className={`w-[23px] h-[2px] transition ease-in duration-150 bg-black mb-1 ${
                  showNav ? "rotate-45 mb-0 translate-y-[1px]" : "rotate-0 mb-1"
                }`}
              ></div>
              <div
                className={`w-[23px] h-[2px] transition ease-in duration-150 bg-black mb-1 ${
                  showNav ? "hidden mb-0" : "mb-1"
                }`}
              ></div>
              <div
                className={`w-[23px] h-[2px] transition ease-in duration-150 bg-black mb-1 ${
                  showNav ? "-rotate-45 mb-0" : "rotate-0"
                }`}
              ></div>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
