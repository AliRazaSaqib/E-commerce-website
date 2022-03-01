/** @format */

import { Link } from "react-router-dom";

const Footer = () => {
  const handleMoveUp = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full pt-24">
      <footer className="footer-1 bg-[#333333] py-8 sm:py-12 relative">
        <div className="container mx-auto px-8 md:px-12 lg:px-16 2xl:px-24">
          <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
              <h5 className="text-xl font-bold mb-6 text-[#e4853f]">
                Features
              </h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent text-white hover:border-[#e4853f] hover:text-[#e4853f]"
                  >
                    Cool stuff
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent text-white hover:border-[#e4853f] hover:text-[#e4853f]"
                  >
                    Random feature
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent text-white hover:border-[#e4853f] hover:text-[#e4853f]"
                  >
                    Team feature
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent text-white hover:border-[#e4853f] hover:text-[#e4853f]"
                  >
                    Stuff for developers
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent text-white hover:border-[#e4853f] hover:text-[#e4853f]"
                  >
                    Another one
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent text-white hover:border-[#e4853f] hover:text-[#e4853f]"
                  >
                    Last time
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
              <h5 className="text-xl font-bold mb-6 text-[#e4853f]">
                Resources
              </h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent text-white hover:border-[#e4853f] hover:text-[#e4853f]"
                  >
                    Resource
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent text-white hover:border-[#e4853f] hover:text-[#e4853f]"
                  >
                    Resource name
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent text-white hover:border-[#e4853f] hover:text-[#e4853f]"
                  >
                    Another resource
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent text-white hover:border-[#e4853f] hover:text-[#e4853f]"
                  >
                    Final resource
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 className="text-xl font-bold mb-6 text-[#e4853f]">About</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent text-white hover:border-[#e4853f] hover:text-[#e4853f]"
                  >
                    Team
                  </a>
                </li>
                <li className="mb-2">
                  <Link
                    to="/location"
                    className="border-b border-solid border-transparent text-white hover:border-[#e4853f] hover:text-[#e4853f]"
                  >
                    Location
                  </Link>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent text-white hover:border-[#e4853f] hover:text-[#e4853f]"
                  >
                    Privacy
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent text-white hover:border-[#e4853f] hover:text-[#e4853f]"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 className="text-xl font-bold mb-6 text-[#e4853f]">Help</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent text-white hover:border-[#e4853f] hover:text-[#e4853f]"
                  >
                    Support
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent text-white hover:border-[#e4853f] hover:text-[#e4853f]"
                  >
                    Help Center
                  </a>
                </li>

                <li className="mb-2">
                  <Link
                    to="/contact"
                    className="border-b border-solid border-transparent text-white hover:border-[#e4853f] hover:text-[#e4853f]"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
              <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left text-[#e4853f]">
                Stay connected
              </h5>
              <div className="flex sm:justify-center xl:justify-start">
                <a
                  href=""
                  className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600 flex items-center justify-center"
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  href=""
                  className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400 flex items-center justify-center"
                >
                  <i className="fa fa-twitter"></i>
                </a>
                <a
                  href=""
                  className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400 flex items-center justify-center"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
                <a
                  href=""
                  className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600 flex items-center justify-center"
                >
                  <i className="fa fa-google"></i>
                </a>
                <a
                  href=""
                  className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-[#C13584] hover:border-[#C13584] flex items-center justify-center"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </div>

              <button className="px-4 py-2 mt-8 bg-[#e4853f] rounded text-black hover:text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-4 right-8 p-2 cursor-pointer flex items-center justify-center bg-[#e4853f] hover:bg-black"
          onClick={handleMoveUp}
        >
          <i className="fa fa-arrow-up text-white"></i>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
