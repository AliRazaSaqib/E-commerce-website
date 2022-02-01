/** @format */

import { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
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

  console.log(product);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const galleryItems = product.map((elem) => (
    <div key={elem.id} className="mx-auto text-center mt-8">
      <img
        src={elem.image}
        alt="not found"
        className="cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-90 h-80 mx-auto"
      />
      <div className="font-mono pt-4 font-semibold text-[#E4853F]">
        Rating {elem.rating.rate}/5.0
      </div>
      <div className="font-['Poppins'] pt-4 text-gray-400  hover:text-[#e4853f]">
        {elem.title}
      </div>
      <div className="font-mono pt-4 font-semibold">${elem.price}</div>
    </div>
  ));

  return (
    <div className="pt-12">
      <h1 className="font-mono text-5xl font-bold text-center">TOP PRODUCTS</h1>
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
        animationType="fadeout"
        animationDuration={800}
        disableButtonsControls
        items={galleryItems}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </div>
  );
};

export default TopProducts;
