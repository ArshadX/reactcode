"use client";
import { IBM_Plex_Sans } from "@next/font/google";
import Codepad from "@/components/Codepad";
export default function Home() {
  return (
    <>
      <main className="h-screen">
        <div className="flex h-screen flex-grow flex-col items-center justify-start">
          <div className="md:3/4 mt-11 backdrop-blur-sm lg:w-3/4">
            <h1 className="my-10 text-center text-4xl font-extrabold md:text-5xl lg:text-6xl">
              Build your web and mobile applications with ease using{" "}
              <a href="/dashboard" className="text-red">
                React Code
              </a>
            </h1>
            <p className="text-center text-base font-extralight text-white md:text-3xl lg:text-5xl">
              Common components and logics that used in every applications out there.
            </p>
          </div>
        </div>
      </main>
      <div className="!absolute right-0 left-0 bottom-0 z-[-50] hidden md:block lg:block">
        <img
          src="/images/background/Polygon Luminary.svg"
          alt="polygon"
          className="h-full w-auto overflow-hidden"
          width={100}
          height={100}
        />
      </div>
      <div className="!absolute right-0 left-0 -bottom-14 z-[-50] md:hidden lg:hidden">
        <img
          src="/images/background/Polygon Mobile.svg"
          alt="polygon"
          className="h-full w-full overflow-hidden"
          width={100}
          height={100}
        />
      </div>
      <div className="!absolute right-0 left-0 bottom-0 z-[-1] ">
        <Codepad />
      </div>
    </>
  );
}

