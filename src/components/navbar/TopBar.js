/** @format */

import React from "react";
import logo from "../../assets/logo.jpg";

function TopBar() {
  return (
    <div className="py-4 flex justify-center border-b">
      <div className="container flex items-center justify-between">
        <div>
          <img src={logo} />
        </div>

        <div className="flex items-center">
          <input
            type="search"
            className="h-10 min-w-[25%] w-80 border-solid border border-gray-200 focus:outline-none px-6 text-xs"
            placeholder="Enter Your Search ...."
          />
          <button className="bg-[#e4853f] p-2 px-4 font-mono text-white hover:text-black -ml-2">
            Search
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-full text-[#e4853f] border-solid border border-gray-200 h-12 w-12 flex items-center justify-center cursor-pointer hover:bg-[#e4853f] hover:text-white">
            <i className="fa fa-phone text-2xl"></i>
          </div>
          <div>
            <div className="text-lg font-mono font-medium hover:text-[#e4853f]">
              CALL US NOW
            </div>
            <div className="text-xs text-gray-500">Free: +923077534255</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-full text-[#e4853f] border-solid border border-gray-200 h-12 w-12 flex items-center justify-center cursor-pointer hover:bg-[#e4853f] hover:text-white">
            <i className="fa fa-user text-2xl"></i>
          </div>
          <div>
            <div className="text-lg font-mono font-medium hover:text-[#e4853f]">
              My Account
            </div>
            <div className="text-xs text-gray-500">Get Option Here</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-full text-[#e4853f] border-solid border border-gray-200 h-12 w-12 flex items-center justify-center cursor-pointer hover:bg-[#e4853f] hover:text-white">
            <i className="fa  fa-shopping-cart text-2xl"></i>
          </div>
          <div>
            <div className="text-lg font-mono font-medium hover:text-[#e4853f]">
              Shooping Cart
            </div>
            <div className="text-xs text-gray-500">0Items - $0.00</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
