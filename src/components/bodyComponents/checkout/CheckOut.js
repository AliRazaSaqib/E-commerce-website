/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItems } from "../../../redux/slices/AddToCart";

export default function CheckOut() {
  const productDetsils = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  // for price
  let totalPrice = 0;
  productDetsils.newCart.forEach((element) => {
    totalPrice += element.price;
  });

  const handleDelete = (res) => {
    let filteredItem = productDetsils.newCart.filter(
      (item, index) => item.id !== res.id
    );
    dispatch(deleteItems({ data: [...filteredItem] }));
  };

  return (
    <div className="container p-12 mx-auto">
      <div className="flex flex-col w-full px-0 mx-auto md:flex-row gap-10">
        <div className="flex flex-col md:w-full">
          <h2 className="mb-4 font-bold md:text-xl text-heading ">
            Shipping Address
          </h2>
          <form className="justify-center w-full mx-auto" method="post" action>
            <div>
              <div className="space-x-0 lg:flex lg:space-x-4">
                <div className="w-full lg:w-1/2">
                  <label
                    htmlFor="firstName"
                    className="block mb-3 text-sm font-semibold text-gray-500"
                  >
                    First Name
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div className="w-full lg:w-1/2 ">
                  <label
                    htmlFor="firstName"
                    className="block mb-3 text-sm font-semibold text-gray-500"
                  >
                    Last Name
                  </label>
                  <input
                    name="Last Name"
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="w-full">
                  <label
                    htmlFor="Email"
                    className="block mb-3 text-sm font-semibold text-gray-500"
                  >
                    Email
                  </label>
                  <input
                    name="Last Name"
                    type="text"
                    placeholder="Email"
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="w-full">
                  <label
                    htmlFor="Address"
                    className="block mb-3 text-sm font-semibold text-gray-500"
                  >
                    Address
                  </label>
                  <textarea
                    className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    name="Address"
                    cols="20"
                    rows="4"
                    placeholder="Address"
                  ></textarea>
                </div>
              </div>
              <div className="space-x-0 lg:flex lg:space-x-4">
                <div className="w-full lg:w-1/2">
                  <label
                    htmlFor="city"
                    className="block mb-3 text-sm font-semibold text-gray-500"
                  >
                    City
                  </label>
                  <input
                    name="city"
                    type="text"
                    placeholder="City"
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div className="w-full lg:w-1/2 ">
                  <label
                    htmlFor="postcode"
                    className="block mb-3 text-sm font-semibold text-gray-500"
                  >
                    Postcode
                  </label>
                  <input
                    name="postcode"
                    type="text"
                    placeholder="Post Code"
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="relative pt-3 xl:pt-6">
                <label
                  htmlFor="note"
                  className="block mb-3 text-sm font-semibold text-gray-500"
                >
                  Notes (Optional)
                </label>
                <textarea
                  name="note"
                  className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                  rows="4"
                  placeholder="Notes htmlFor delivery"
                ></textarea>
              </div>
              <div className="mt-4">
                <button className="w-full px-6 py-2  bg-[#e4853f] hover:bg-black hover:text-white">
                  Process
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* now cart summery section start */}
        <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
          <div className="pt-12 md:pt-0 2xl:ps-4">
            <h2 className="text-xl font-bold font-['Poppins'] ">
              Order Summary
            </h2>
            <div className="mt-8">
              {productDetsils.newCart.map((res) => (
                <div className="flex flex-col space-y-4 pt-6">
                  <div className="flex space-x-4">
                    <div>
                      <img src={res.image} alt="image" className="w-50 h-50" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold font-['Poppins'] text-justify ">
                        {res.title}
                      </h2>
                      <p className="text-xs font-['Poppins'] text-justify ">
                        {res.description}
                      </p>
                      <span className="text-[#e4853f] font-['Poppins'] font-bold">
                        Price
                      </span>
                      <span className="pl-2 font-['Poppins']">
                        ${res.price}
                      </span>
                    </div>
                    <div
                      className="cursor-pointer"
                      onClick={() => handleDelete(res)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
              Subtotal<span className="ml-2">${totalPrice}</span>
            </div>
            <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
              Shipping Tax<span className="ml-2">$20</span>
            </div>
            <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
              Total<span className="ml-2">${totalPrice + 20}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
