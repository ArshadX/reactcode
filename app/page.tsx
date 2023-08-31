"use client";

import AboutSectionOne from "@/components/About/AboutSectionOne";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="relative isolate bg-dark/30 py-1.5 px-6 backdrop-blur-lg lg:px-4">
        <div className="absolute inset-x-0 bottom-0  -z-10 overflow-hidden " aria-hidden="true">
          <img
            src="/images/background/Polygon Luminary.svg"
            alt="polygon"
            className="relative hidden h-screen overflow-hidden md:block lg:block"
            width={1920}
            height={1080}
            loading="lazy"
          />
          <img
            src="/images/background/Polygon Mobile.svg"
            alt="polygon"
            className="relative h-screen overflow-hidden md:hidden lg:hidden"
            width={1920}
            height={1080}
            loading="lazy"
          />
        </div>

        <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-40">
          <div className="text-center">
            <h1 className="text-gray-900 text-4xl font-bold tracking-tight sm:text-6xl">
              Build your web and mobile applications with ease using{" "}
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
      <AboutSectionOne />
    </>
  );
}

