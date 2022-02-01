/** @format */

import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import user from "../../../assets/icon-1.png";
import money from "../../../assets/icons-2.png";
import freeDelivery from "../../../assets/icons-3.png";

const Support = () => {
  const [product, setProduct] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then((res) => res.json())
      .then((result) => {
        setProduct(result);
        setLoader(false);
      });
  }, []);

  return (
    <div className="container pt-8">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
        <div className="border flex items-center gap-4 cursor-pointer p-2 justify-center hover:bg-[#e4853f] hover:text-white hover:transition ease-in-out delay-250">
          <img src={user} alt="not found" className="h-8 w-8" />
          <div className="font-['Poppins']">24 x 7 FREE SUPPORT</div>
        </div>

        <div className="border flex items-center gap-4 cursor-pointer p-2 justify-center hover:bg-[#e4853f] hover:text-white hover:transition ease-in-out delay-250">
          <img src={money} alt="not found" className="h-8 w-8" />
          <div className="font-['Poppins']">MONEY BACK GURANTEE</div>
        </div>

        <div className="border flex items-center gap-4 cursor-pointer p-2 justify-center hover:bg-[#e4853f] hover:text-white hover:transition ease-in-out delay-250">
          <img src={freeDelivery} alt="not found" className="h-8 w-8" />
          <div className="font-['Poppins']">24 X 7 FREE DELIVERY</div>
        </div>
      </div>

      {loader ? (
        <div className="flex items-center justify-center space-x-2 animate-bounce mt-12">
          <div className="w-8 h-8 bg-[#e4853f] rounded-full"></div>
          <div className="w-8 h-8 bg-[#C8F8F8] rounded-full"></div>
          <div className="w-8 h-8 bg-[#EEB8C6] rounded-full"></div>
        </div>
      ) : null}
      <div className="pt-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3  lg:gap-4 gap-4 sm:gap-4 xl:gap-0 2xl:gap-0">
        {product.slice(0, 3).map((elem) => (
          <div
            key={elem.id}
            className="mx-auto text-center hover:text-[#e4853f]"
          >
            <img
              src={elem.image}
              alt="not found"
              className="cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-90 h-80 mx-auto"
            />
            <div className="font-['Poppins'] pt-4">{elem.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support;
