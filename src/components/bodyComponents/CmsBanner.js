/** @format */

import React from "react";
import "../../App.css";
import Fade from "react-reveal/Fade";

const CmsBanner = () => {
  return (
    <div className="offer-section 2xl:px-28 xl:px-28 lg:px-20 md:px-16 sm:px-14 px-8 py-12 flex">
      <Fade left>
        <div className="2xl:max-w-md xl:max-w-md lg:max-w-xs">
          <div className="stroke-text font-['Poppins']">
            <div className="2xl:text-7xl xl:text-7xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
              New
            </div>
            <div className="2xl:text-7xl xl:text-7xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
              Collection
            </div>
          </div>
          <button className="text-white bg-black p-2 px-8 mt-4 hover:bg-[#e4853f] font-['Poppins']">
            VIEW COLLECTION
          </button>
        </div>
      </Fade>

      <Fade right>
        <div className="max-w-md text-right ml-auto ">
          <button className="text-black bg-gray-200 p-2 px-8 mt-2 hover:bg-black hover:text-white font-['Poppins']">
            VIEW COLLECTION
          </button>
          <div className="offer stroke-text-offer font-['Poppins'] 2xl:text-7xl xl:text-7xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl mt-6">
            2020
          </div>
          <div className="offer stroke-text-offer font-['Poppins'] 2xl:text-7xl xl:text-7xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
            30% OFF
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default CmsBanner;
