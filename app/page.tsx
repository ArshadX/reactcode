import React from "react";
import Hero from "@/components/Hero";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import Testimony from "@/components/Testimonials/FounderTestimony";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSectionOne />
      <Testimony /> // fix unsupported style bg-indigo-300
    </>
  );
}

