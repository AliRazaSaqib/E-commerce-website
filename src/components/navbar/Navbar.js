/** @format */

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import uk from "../../assets/uk.jpg";
import french from "../../assets/2.jpg";
import espanol from "../../assets/3.jpg";
import Italiano from "../../assets/5.jpg";
import megaMenu from "../../assets/mega-menu.jpg";
import "../../App.css";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState([{ image: uk, lang: "English" }]);
  const [money, setMoney] = useState([{ name: "Us-dollar" }]);

  //  for language
  const arr = [
    {
      id: uuidv4(),
      image: french,
      lang: "French",
    },
    {
      id: uuidv4(),
      image: espanol,
      lang: "Espanol",
    },

    {
      id: uuidv4(),
      image: Italiano,
      lang: "Italiano",
    },
  ];

  // for set selected money
  const amount = [
    {
      id: uuidv4(),
      name: "Euro",
    },

    {
      id: uuidv4(),
      name: "Dollar",
    },
  ];

  // for country
  const handleChange = (el) => {
    const getSelectedLang = arr.filter((elem) => elem.id === el.id);
    setLanguage(getSelectedLang);
  };
  const getLang = language.map((el) => el.lang);
  const getImg = language.map((el) => el.image);

  // for selected name
  const handleSelectedSource = (el) => {
    const getAmount = amount.filter((elem) => elem.id === el.id);
    setMoney(getAmount);
  };
  const setName = money.map((el) => el.name);

  // for search
  const handleSearch = () => {
    console.log("srch");
  };
  return (
    <div className="flex items-center justify-between gap-6">
      <div className="py-4 flex gap-4">
        <div className="group relative">
          <button className="text-[#565555]  text-lg font-['Poppins'] font-light hover:text-[#ca8757]">
            <img src={getImg} alt="not found" className="inline-block" />
            <span className="ml-2">{getLang}</span>
          </button>

          <nav
            tabindex="0"
            className=" bg-white invisible w-60 absolute left-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1 z-[999] mt-2"
          >
            <ul className="py-1">
              {arr.map((el) => (
                <li key={el.id} onClick={() => handleChange(el)}>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-[#e4853f] hover:text-white font-['Poppins'] text-[#565555]"
                  >
                    <img
                      src={el.image}
                      alt="not found"
                      className="inline-block"
                    />
                    <span className="ml-2">{el.lang}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <span className="hidden 2xl:flex xl:flex lg:hidden md:hidden sm:hidden">
          |
        </span>
        <div className="group relative hidden 2xl:flex xl:flex lg:hidden md:hidden sm:hidden">
          <button className="text-[#565555]  text-lg font-['Poppins'] font-light hover:text-[#ca8757]">
            <span>$</span> - {setName}
          </button>
          <nav
            tabindex="0"
            className=" bg-white invisible w-80 absolute left-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1 z-[999] mt-2"
          >
            <ul className="py-1">
              {amount.map((el) => (
                <li key={el.id} onClick={() => handleSelectedSource(el)}>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-[#e4853f] hover:text-white font-['Poppins'] text-[#565555]"
                  >
                    <span>$</span> - {el.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <nav className="bg-white border-gray-300 text-gray-900 z-[1] mobile-view">
        <div className="max-w-7x2 container mx-auto">
          <div className="container mx-auto flex justify-between">
            <ul className="flex items-center gap-10 hidden md:hidden lg:hidden xl:flex 2xl:flex">
              <li className="hoverable hover:text-[#e4853f]">
                <a
                  href="#"
                  className="relative block  text-sm lg:text-base after:hidden text-[#565555] font-semibold  transition-all"
                >
                  FASHION
                </a>
                <div className="py-2 mega-menu mb-16 sm:mb-0 shadow-xl bg-white max-w-lg">
                  <div className="container mx-auto w-full flex flex-wrap justify-between">
                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b  lg:border-b-0 pb-6 pt-6 lg:pt-3">
                      <div className="flex items-center">
                        <h4 className=" text-[#e99b63] text-base mb-2 font-['Poppins'] font-semibold border-b-2  border-[#e99b63]">
                          Clothing
                        </h4>
                      </div>
                      <div>
                        <ul className="flex flex-col gap-2">
                          <li className="cursor-pointer font-['Poppins'] text-sm hover:scale-100 hover:text-[#e4853f]  text-[#565555]">
                            Sports Wear
                          </li>
                          <li className="cursor-pointer font-['Poppins'] text-sm hover:scale-100 hover:text-[#e4853f]  text-[#565555]">
                            Sports Wear
                          </li>
                          <li className="cursor-pointer font-['Poppins'] text-sm hover:scale-100 hover:text-[#e4853f]  text-[#565555]">
                            Sports Wear
                          </li>
                          <li className="cursor-pointer font-['Poppins'] text-sm hover:scale-100 hover:text-[#e4853f]  text-[#565555]">
                            Sports Wear
                          </li>
                        </ul>
                      </div>
                    </ul>
                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b  lg:border-b-0 pb-6 pt-6 lg:pt-3">
                      <div className="flex items-center">
                        <h3 className=" text-[#e99b63]  text-base mb-2 font-['Poppins'] font-semibold border-b-2  border-[#e99b63]">
                          ACCECORIES
                        </h3>
                      </div>
                      <div>
                        <ul className="flex flex-col gap-2">
                          <li className="cursor-pointer font-['Poppins'] hover:scale-100 hover:text-[#e4853f] text-sm text-[#565555]">
                            Sports Wear
                          </li>
                          <li className="cursor-pointer font-['Poppins'] hover:scale-100 hover:text-[#e4853f] text-sm text-[#565555]">
                            Sports Wear
                          </li>
                          <li className="cursor-pointer font-['Poppins'] hover:scale-100 hover:text-[#e4853f] text-sm text-[#565555]">
                            Sports Wear
                          </li>
                          <li className="cursor-pointer font-['Poppins'] hover:scale-100 hover:text-[#e4853f] text-sm text-[#565555]">
                            Sports Wear
                          </li>
                        </ul>
                      </div>
                    </ul>
                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 md:border-b-0 pb-6 pt-6 lg:pt-3">
                      <div className="flex items-center">
                        <h3 className=" text-[#e99b63] text-base mb-2 font-['Poppins'] font-semibold border-b-2  border-[#e99b63]">
                          FOOTWEAR
                        </h3>
                      </div>
                      <div>
                        <ul className="flex flex-col gap-2">
                          <li className="cursor-pointer font-['Poppins'] hover:scale-100 hover:text-[#e4853f] text-sm text-[#565555]">
                            Sports Wear
                          </li>
                          <li className="cursor-pointer font-['Poppins'] hover:scale-100 hover:text-[#e4853f] text-sm text-[#565555]">
                            Sports Wear
                          </li>
                          <li className="cursor-pointer font-['Poppins'] hover:scale-100 hover:text-[#e4853f] text-sm text-[#565555]">
                            Sports Wear
                          </li>
                          <li className="cursor-pointer font-['Poppins'] hover:scale-100 hover:text-[#e4853f] text-sm text-[#565555]">
                            Sports Wear
                          </li>
                        </ul>
                      </div>
                    </ul>
                    <img
                      src={megaMenu}
                      alt="not found"
                      className="w-full px-4 pt-10"
                    />
                  </div>
                </div>
              </li>

              <li>
                <a
                  href="#"
                  className=" text-sm lg:text-base hover:text-[#e4853f] font-semibold  text-[#565555]  transition-all"
                >
                  FASHION
                </a>
              </li>

              <li className="text-black hover:text-[#e4853f]">
                <a
                  href="#"
                  className="text-sm lg:text-base hover:text-[#e4853f] font-semibold  text-[#565555]  transition-all"
                >
                  ELECTRONICS
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm lg:text-base hover:text-[#e4853f] font-semibold  text-[#565555]  transition-all"
                >
                  BABY AND KINDS
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm lg:text-base hover:text-[#e4853f] font-semibold  text-[#565555]  transition-all"
                >
                  FASHION
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className=" text-sm lg:text-base  hover:text-[#e4853f] font-semibold  text-[#565555]  transition-all"
                >
                  AUTOMOBILE
                </a>
              </li>
            </ul>

            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=" inline-flex items-center justify-between p-2"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
        >
          <div className="md:hidden" id="mobile-menu">
            <div className="pt-12 p-10 pb-3 space-y-1 sm:px-3 shadow-sm shadow-[#e4853f]">
              <ul className="flex flex-col items-start gap-10 md:hidden">
                <li className="hoverable hover:text-[#e4853f]">
                  <a
                    href="#"
                    className="relative block  text-sm lg:text-base after:hidden text-[#565555] font-semibold  transition-all"
                  >
                    FASHION
                  </a>
                  <div className="py-2 mega-menu mb-16 sm:mb-0 shadow-xl bg-white max-w-lg">
                    <div className="container mx-auto w-full flex flex-wrap justify-between">
                      <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b  lg:border-b-0 pb-6 pt-6 lg:pt-3">
                        <div className="flex items-center">
                          <h4 className=" text-[#e99b63] text-base mb-2 font-['Poppins'] font-semibold border-b-2  border-[#e99b63]">
                            Clothing
                          </h4>
                        </div>
                        <div>
                          <ul>
                            <li className="cursor-pointer font-['Poppins'] text-sm hover:scale-100 hover:text-[#e4853f]  text-[#565555]">
                              Sports Wear
                            </li>
                            <li className="cursor-pointer font-['Poppins'] text-sm hover:scale-100 hover:text-[#e4853f]  text-[#565555]">
                              Sports Wear
                            </li>
                            <li className="cursor-pointer font-['Poppins'] text-sm hover:scale-100 hover:text-[#e4853f]  text-[#565555]">
                              Sports Wear
                            </li>
                            <li className="cursor-pointer font-['Poppins'] text-sm hover:scale-100 hover:text-[#e4853f]  text-[#565555]">
                              Sports Wear
                            </li>
                          </ul>
                        </div>
                      </ul>
                      <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b  lg:border-b-0 pb-6 pt-6 lg:pt-3">
                        <div className="flex items-center">
                          <h3 className=" text-[#e99b63]  text-base mb-2 font-['Poppins'] font-semibold border-b-2  border-[#e99b63]">
                            ACCECORIES
                          </h3>
                        </div>
                        <div>
                          <ul>
                            <li className="cursor-pointer font-['Poppins'] hover:scale-100 hover:text-[#e4853f] text-sm text-[#565555]">
                              Sports Wear
                            </li>
                            <li className="cursor-pointer font-['Poppins'] hover:scale-100 hover:text-[#e4853f] text-sm text-[#565555]">
                              Sports Wear
                            </li>
                            <li className="cursor-pointer font-['Poppins'] hover:scale-100 hover:text-[#e4853f] text-sm text-[#565555]">
                              Sports Wear
                            </li>
                            <li className="cursor-pointer font-['Poppins'] hover:scale-100 hover:text-[#e4853f] text-sm text-[#565555]">
                              Sports Wear
                            </li>
                          </ul>
                        </div>
                      </ul>
                      <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 md:border-b-0 pb-6 pt-6 lg:pt-3">
                        <div className="flex items-center">
                          <h3 className=" text-[#e99b63] text-base mb-2 font-['Poppins'] font-semibold border-b-2  border-[#e99b63]">
                            FOOTWEAR
                          </h3>
                        </div>
                        <div>
                          <ul>
                            <li className="cursor-pointer font-['Poppins'] hover:scale-100 hover:text-[#e4853f] text-sm text-[#565555]">
                              Sports Wear
                            </li>
                            <li className="cursor-pointer font-['Poppins'] hover:scale-100 hover:text-[#e4853f] text-sm text-[#565555]">
                              Sports Wear
                            </li>
                            <li className="cursor-pointer font-['Poppins'] hover:scale-100 hover:text-[#e4853f] text-sm text-[#565555]">
                              Sports Wear
                            </li>
                            <li className="cursor-pointer font-['Poppins'] hover:scale-100 hover:text-[#e4853f] text-sm text-[#565555]">
                              Sports Wear
                            </li>
                          </ul>
                        </div>
                      </ul>
                      <img
                        src={megaMenu}
                        alt="not found"
                        className="w-full px-4 pt-10"
                      />
                    </div>
                  </div>
                </li>

                <li>
                  <a
                    href="#"
                    className=" text-sm lg:text-base hover:text-[#e4853f] font-semibold  text-[#565555]  transition-all"
                  >
                    FASHION
                  </a>
                </li>

                <li className="text-black hover:text-[#e4853f]">
                  <a
                    href="#"
                    className=" text-sm lg:text-base hover:text-[#e4853f] font-semibold  text-[#565555]  transition-all"
                  >
                    ELECTRONICS
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className=" text-sm lg:text-base hover:text-[#e4853f] font-semibold  text-[#565555]  transition-all"
                  >
                    BABY AND KINDS
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className=" text-sm lg:text-base font-semibold  text-[#565555]  transition-all"
                  >
                    FASHION
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className=" text-sm lg:text-base  hover:text-[#e4853f] font-semibold  text-[#565555]  transition-all"
                  >
                    AUTOMOBILE
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Transition>
      </nav>
      <div className="text-[#e4853f] font-['Poppins'] hidden 2xl:flex xl:hidden lg:hidden md:hidden">
        Extra 20% OFF!
      </div>

      <div className="2xl:hidden xl:hidden flex gap-6 ml-auto">
        <i className="fa fa-search text-2xl" onClick={handleSearch}></i>
        <i className="fa fa-user text-2xl"></i>
        <i className="fa fa-shopping-cart text-2xl"></i>
      </div>
    </div>
  );
};

export default Navbar;
