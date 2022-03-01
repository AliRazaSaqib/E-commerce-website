/** @format */
import women from "../../../assets/category-women.jpg";
import men from "../../../assets/category-men.jpg";
import arrow from "../../../assets/arrow.png";
import React from "react";
import "../../../App.css";
import Products from "../../../components/productcatagory/Products";
import { Link } from "react-router-dom";
import Women from "../../productsVariation/Women";
import SelectedItem from "../itemcatagories/SelectedItem";
import { useEffect } from "react";
import { useState } from "react";
const MenWomenCatagory = () => {
  const [filterData, setFilterData] = useState([]);
  // useEffect(async () => {
  //   fetch("http://run.mocky.io/v3/259fca3b-297a-4ed6-ad57-e1d49b1065e7")
  //     .then((res) => ("res", res.json()))
  //     .then((data) => console.log("Data", data))
  //     .catch((error) => console.log(error));
  // }, []);

  // console.log("Data", Women);
  // const findRes = Women.map((el) => console.log(el.id));

  // const getWomenItemId = (res) => {
  //   // console.log("Women Item Id", res.id);
  //   const matchId = Women.filter((elem) => elem?.id === res?.id);
  //   setFilterData(matchId);

  //   if (!matchId === undefined) {
  //     <SelectedItem matchId={filterData} />;
  //   }
  // };
  // useEffect(() => {
  //   return () => {
  //     return setFilterData([]);
  //   };
  // }, []);

  const getWomenItemId = (res) => {
    const matchId = Women?.filter((elem) => elem?.userId === res?.id);
    console.log(matchId);
    setFilterData(matchId);
  };
  <SelectedItem name={"ali"} />;

  const getMenItemId = (res) => {
    console.log("Men Item Id", res.id);
  };

  return (
    <>
      <div className="catagories flex justify-between pt-16">
        {/* women section */}
        <div className="womenCatagory flex gap-12">
          <img
            src={women}
            alt="not found"
            className="women-catagory hover:scale-95 cursor-pointer"
          />
          <div className="list w-full max-w-[21rem]">
            {Products.map((el) =>
              el.womenCatagory.map((elem) => (
                <h1 className="font-['Poppins'] text-black font-bold 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl text-4xl">
                  {elem.women}
                </h1>
              ))
            )}
            <ul className="pt-4">
              {Products.map((elem) =>
                elem.womenCatagory.map((el) =>
                  el.womenProducts.map((res) => (
                    <li
                      key={res.id}
                      className="pt-4"
                      onClick={() => getWomenItemId(res)}
                    >
                      <Link
                        to={`items/${res.id}`}
                        className="flex justify-between"
                      >
                        <span className=" font-['Poppins'] women-catagory text-[gray] font-extralight hover:text-[#e4853f] hover:ml-3">
                          {res.name}
                        </span>
                        <img
                          src={arrow}
                          alt="not found"
                          className="h-6 w-6 rotate-[270deg]"
                        />
                      </Link>
                    </li>
                  ))
                )
              )}
            </ul>
          </div>
        </div>

        {/* men section */}
        <div className="menCatagory flex gap-12">
          <img
            src={men}
            alt="not found"
            className="women-catagory hover:scale-95 cursor-pointer"
          />
          <div className="list w-full max-w-[21rem]">
            {Products.map((el) =>
              el.menCatagory.map((elem) => (
                <h1 className="font-['Poppins'] text-black font-bold 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl text-4xl">
                  {elem.men}
                </h1>
              ))
            )}
            <ul className="pt-4">
              {Products.map((elem) =>
                elem.menCatagory.map((el) =>
                  el.menProducts.map((res) => (
                    <li
                      key={res.id}
                      className="pt-4"
                      onClick={() => getMenItemId(res)}
                    >
                      <a href="#" className="flex justify-between">
                        <span className="font-['Poppins'] women-catagory text-[gray] font-extralight hover:text-[#e4853f] hover:ml-3">
                          {res.name}
                        </span>
                        <img
                          src={arrow}
                          alt="not found"
                          className="h-6 w-6 rotate-[270deg]"
                        />
                      </a>
                    </li>
                  ))
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default MenWomenCatagory;
