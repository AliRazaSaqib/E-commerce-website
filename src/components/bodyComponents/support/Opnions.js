/** @format */

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import clientIMg from "../../../assets/umer.png";

export default function Opnions() {
  return (
    <div className="text-center">
      <h1 className=" font-['Poppins'] text-black font-bold 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl text-4xl text-center">
        WHAT PEOPLE SAY'S
      </h1>
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={5000}
        className="smoothScroll mt-8"
        showIndicators={false}
      >
        <div>
          <div className="myCarousel">
            <div className="border-4 border-[#ca8757] h-28 !w-28 rounded-full mx-auto">
              <img src={clientIMg} className="h-28 !w-28 " />
            </div>
            <h3 className="pt-2">Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
              Incomebomb has assembled an expert team of Amazon experts, Front
              End Web Developers, WordPress developers.
            </p>
          </div>
        </div>

        <div>
          <div className="myCarousel">
            <div className="border-4 border-[#ca8757] h-28 !w-28 rounded-full mx-auto">
              <img src={clientIMg} className="h-28 !w-28 " />
            </div>
            <h3 className="pt-2">Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
              Incomebomb has assembled an expert team of Amazon experts, Front
              End Web Developers, WordPress developers.
            </p>
          </div>
        </div>

        <div>
          <div className="myCarousel">
            <div className="border-4 border-[#ca8757] h-28 !w-28 rounded-full mx-auto">
              <img src={clientIMg} className="h-28 !w-28 " />
            </div>
            <h3 className="pt-2">Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
              Incomebomb has assembled an expert team of Amazon experts, Front
              End Web Developers, WordPress developers.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
