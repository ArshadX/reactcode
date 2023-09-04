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
      <main id="home" className="relative isolate bg-dark/30 py-1.5 px-6 backdrop-blur-lg lg:px-4">
        <div className="absolute right-0 bottom-0 -z-10 overflow-hidden" aria-hidden="true">
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
            <h1 className="text-gray-900 text-4xl font-bold tracking-tight sm:text-6xl">
              Build your web and mobile applications with ease using
              <a href="/" className="text-red">
                React Code
              </a>
            </h1>
            <p className="text-center text-base font-extralight text-white md:text-3xl lg:text-5xl">
              Common components and logics that used in every applications out there.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-8">
              <Link
                href="/dashboard"
                className="rounded-md bg-red py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80">
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

