import React from "react";
import Image from "next/image";
import Link from "next/link";

import bg_lg from "@/public/images/hero/backgroundlg.svg";
import bg_md from "@/public/images/hero/backgroundmd.svg";
import bg_sm from "@/public/images/hero/backgroundsm.svg";
import bg_xs from "@/public/images/hero/backgroundxs.svg";

const Hero = () => {
  return (
    <>
      <main id="home" className="relative isolate bg-dark/30 px-6 py-1.5 backdrop-blur-lg lg:px-4">
        <div className="absolute bottom-0 right-0 -z-10 overflow-hidden" aria-hidden="true">
          <Image
            src={bg_lg}
            alt="background Image lg"
            className=" relative hidden h-full min-h-screen w-full overflow-hidden lg:block"
            loading="lazy"
          />
          <Image
            src={bg_md}
            alt="background Image md"
            className="relative hidden h-full min-h-screen overflow-hidden md:block lg:hidden"
            loading="lazy"
          />
          <Image
            src={bg_sm}
            alt="background Image sm"
            className="relative hidden h-full min-h-screen overflow-hidden sm:block md:hidden lg:hidden"
            loading="lazy"
          />
          <Image
            src={bg_xs}
            alt="background Image xs"
            className="relative block h-full  min-h-screen overflow-hidden sm:hidden md:hidden lg:hidden"
            loading="lazy"
          />
        </div>

        <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-40">
          <div className="text-center">
            <text className=" bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
              Build your web and mobile applications with ease using &nbsp;
              <a href="/" className="text-red">
                React Code
              </a>
            </text>
            <p className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text  text-center text-2xl font-extralight sm:text-3xl md:text-4xl lg:text-5xl">
              Common components and logics that used in every applications out there.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-8">
              <Link
                href="/docs"
                className=" rounded-md bg-gradient-to-br from-gray-100 to-gray-400 px-8  py-4 text-base font-semibold text-black shadow-lg drop-shadow-lg duration-300 ease-in-out hover:to-gray-500">
                Get started
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;

