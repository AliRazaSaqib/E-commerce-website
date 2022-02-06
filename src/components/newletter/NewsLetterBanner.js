/** @format */
import "../../App.css";
import img from "../../../src/assets/newsletter-img.png";
import env from "../../../src/assets/env.png";
import Fade from "react-reveal/Fade";

const NewLetterBanner = () => {
  return (
    <div className="pt-24">
      <div className="new-banner">
        <Fade left>
          <img
            src={img}
            alt="not found"
            className="absolute -mt-[5.5rem] pl-8 hidden 2xl:flex xl:flex lg:flex"
          />
        </Fade>

        <div className="subscribe-banner container flex justify-between max-w-7xl mx-auto items-center h-[61vh] px-4 ">
          <h1 className="font-['Poppins'] text-white text-2xl flex items-center">
            <img src={env} alt="not found" />
            <span className="pl-4">
              Subscribe to our Daily News and Updates
            </span>
          </h1>
          <div className="flex items-center max-w-[423px] w-full">
            <input
              type="search"
              className="h-10 min-w-[25%] w-80 border-solid border border-gray-200 focus:outline-none px-6 text-xs"
              placeholder="Enter Your Search ...."
            />
            <button className="bg-black p-2 px-4 font-['Poppins'] text-white hover:text-[#e4853f] -ml-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewLetterBanner;
