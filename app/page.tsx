"use client";

import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimony from "@/components/Testimonials/FounderTestimony";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSectionOne />
      <Testimony />
      <Contact />
    </>
  );
}

