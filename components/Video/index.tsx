"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import { imagelist } from "@/types/imagelist";
var Carousel = require("react-responsive-carousel").Carousel;
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="We are ready to help"
          paragraph="Get ahead in the game with full understanding of Road Safety, Cargo Safety, Vehicle Safety and Pedestrian Safety and get recruited faster."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md" data-wow-delay=".15s">
              <div className="relative aspect-[77/40] items-center justify-center bg-dark backdrop-sepia-0">
                <Carousel
                  autoPlay={true}
                  interval={3000}
                  showIndicators={false}
                  showStatus={false}
                  transitionTime={3000}
                  showArrows={false}
                  showThumbs={false}>
                  <h1>Hello</h1>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-[-1]">
        <img src="/images/video/shape.svg" alt="shape" className="w-full" />
      </div>
    </section>
  );
};

export default Video;

