/** @format */

import React from "react";
import "../../App.css";

const CmsBanner = () => {
  return (
    <div className="offer-section px-28 py-12 flex items-center">
      <div className="max-w-md">
        <div className="stroke-text font-['Poppins']">New Collection</div>
        <button className="text-white bg-black p-2 px-8 mt-4 hover:bg-[#e4853f] font-['Poppins']">
          VIEW COLLECTION
        </button>
      </div>

      <div className="max-w-md text-right ml-auto">
        <button className="text-black bg-gray-200 p-2 px-8 mt-4 hover:bg-black hover:text-white font-['Poppins']">
          VIEW COLLECTION
        </button>
        <div className="stroke-text-offer font-['Poppins']">2020</div>
        <div className="stroke-text-offer font-['Poppins']">30% OFF</div>
      </div>
    </div>
  );
};

export default CmsBanner;
