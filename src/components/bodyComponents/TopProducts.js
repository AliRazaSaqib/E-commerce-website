/** @format */

import { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import StarRatings from "react-star-ratings";
import "../../App.css";
const TopProducts = () => {
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

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const galleryItems = product.map((elem) => (
    <div key={elem.id} className="mx-auto text-center mt-8 group">
      <img
        src={elem.image}
        alt="not found"
        className="cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-90 h-80 mx-auto"
      />
      <div className="font-['Poppins'] pt-4 font-semibold text-[#E4853F]">
        <StarRatings
          starRatedColor="#ffb700"
          starDimension="18px"
          starSpacing="2px"
          rating={elem.rating.rate}
        />
      </div>
      <div className="font-['Poppins'] pt-4 text-gray-400  hover:text-[#e4853f] truncate max-w-sm">
        {elem.title}
      </div>
      <div className="font-['Poppins'] text-lg pt-4 font-bold">
        ${elem.price}
      </div>

      <button className="mt-4 p-4 mx-auto hidden group-hover:block bg-[#E4853F] rounded-md text-white font-bold hover:text-black">
        ADD TO CART
      </button>
    </div>
  ));

  return (
    <div className="pt-12">
      <h1 className="font-['Poppins'] font-bold 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl text-4xl text-center">
        TOP PRODUCTS
      </h1>

      {loader ? (
        <div className="flex items-center justify-center space-x-2 animate-bounce mt-12">
          <div className="w-8 h-8 bg-[#e4853f] rounded-full"></div>
          <div className="w-8 h-8 bg-[#C8F8F8] rounded-full"></div>
          <div className="w-8 h-8 bg-[#EEB8C6] rounded-full"></div>
        </div>
      ) : null}
      <AliceCarousel
        mouseTracking
        autoPlay
        infinite
        animationType="fadeout"
        animationDuration={2000}
        disableButtonsControls
        items={galleryItems}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </div>
  );
};

export default TopProducts;
