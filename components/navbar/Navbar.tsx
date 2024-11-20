"use client";

import Container from "@/app/Container";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ProductNav from "./ProductNav";

const Navbar = () => {
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
              <Image
                src="/images/LogoNoWhite.png"
                width={42}
                height={42}
                alt="logo"
              />
              {/* <svg
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
              </svg> */}
            </Link>
            <button
              type="button"
              onClick={() => setShowNav(!showNav)}
              className="lg:hidden cursor-pointer"
            >
              <div
                className={`w-[23px] h-[2px] transition ease-in duration-150 bg-black mb-1 ${
                  showNav ? "rotate-45 mb-0 translate-y-[1px]" : "rotate-0 mb-1"
                }`}
              />
              <div
                className={`w-[23px] h-[2px] transition ease-in duration-150 bg-black mb-1 ${
                  showNav ? "hidden mb-0" : "mb-1"
                }`}
              />
              <div
                className={`w-[23px] h-[2px] transition ease-in duration-150 bg-black mb-1 ${
                  showNav ? "-rotate-45 mb-0" : "rotate-0"
                }`}
              />
            </button>
          </div>
          <div
            className={`flex w-full max-lg:absolute transition ease-in duration-200 top-20 z-40 ${
              showNav
                ? "max-lg:translate-x-0 max-lg:scale-100"
                : "max-lg:max-h-0 max-lg:scale-y-50 max-lg:translate-y-1/4"
            }`}
          >
            <div className="flex max-lg:flex-col lg:items-center max-sm:w-10/12 max-sm:mx-auto sm:ml-auto max-lg:w-[320px] lg:w-full max-lg:max-h-[500px] overflow-y-auto lg:mb-0 max-lg:bg-white max-lg:rounded-lg">
              <nav className="mt-0 px-3 lg:px-6 text-[15.5px] mb-0 max-lg:py-10 max-lg:px-5">
                <ul className="flex lg:items-center lg:space-x-2 max-lg:flex-col max-lg:text-neutral-700 max-lg:text-xl max-lg:font-medium max-lg:space-y-6 max-lg:h-auto overflow-y-auto">
                  <ProductNav />
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
