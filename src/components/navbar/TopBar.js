/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

function TopBar() {
  const reduxData = useSelector((state) => state.cartItems);

  // for counter
  const cartCounter = reduxData.newCart.length;

  // for price
  let totalPrice = 0;
  reduxData.newCart.forEach((element) => {
    totalPrice += element.price;
  });

  return (
    <div className="py-4 flex justify-center border-b">
      <div className="container flex items-center justify-between">
        <div>
          <Link to="/">
            <img src={logo} alt="not found" />
          </Link>
        </div>

        <div className="flex items-center hidden xl:flex 2xl:flex">
          <input
            type="search"
            className="h-10 min-w-[25%] w-80 border-solid border border-gray-200 focus:outline-none px-6 text-xs"
            placeholder="Enter Your Search ...."
          />
          <button className="bg-[#e4853f] p-2 px-4 font-['Poppins'] text-white hover:text-black -ml-2">
            Search
          </button>
        </div>

        <div className="flex items-center gap-4 hidden lg:hidden xl:flex md:hidden 2xl:flex">
          <div className="rounded-full text-[#e4853f] border-solid border border-gray-200 h-10 w-10 flex items-center justify-center cursor-pointer hover:bg-[#e4853f] hover:text-white">
            <i className="fa fa-phone text-xl"></i>
          </div>
          <div>
            <div className="text-md font-['Poppins'] font-medium hover:text-[#e4853f]">
              CALL US NOW
            </div>
            <div className="text-xs text-gray-500 font-['Poppins']">
              Free: +923077534255
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 hidden lg:hidden xl:flex md:hidden 2xl:flex">
          <div className="rounded-full text-[#e4853f] border-solid border border-gray-200 h-10 w-10 flex items-center justify-center cursor-pointer hover:bg-[#e4853f] hover:text-white">
            <i className="fa fa-user text-xl"></i>
          </div>
          <Link to="/login">
            <div>
              <div className="text-md font-['Poppins'] font-medium hover:text-[#e4853f]">
                My Account
              </div>
              <div className="text-xs text-gray-500 font-['Poppins']">
                Get Option Here
              </div>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-4 hidden lg:hidden xl:flex md:hidden 2xl:flex">
          <div className="rounded-full text-[#e4853f] border-solid border border-gray-200 h-10 w-10 flex items-center justify-center cursor-pointer hover:bg-[#e4853f] hover:text-white">
            <Link to="/checkout">
              <i className="fa fa-shopping-cart text-xl"></i>
            </Link>
          </div>
          <div>
            <div className="text-md font-['Poppins'] font-medium hover:text-[#e4853f]">
              Shooping Cart
            </div>
            <div className="text-xs text-gray-500 font-['Poppins']">
              {cartCounter} Items - ${totalPrice.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
