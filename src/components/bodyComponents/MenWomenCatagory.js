/** @format */
import women from "../../assets/category-women.jpg";
import men from "../../assets/category-men.jpg";
import arrow from "../../assets/arrow.png";
import "../../App.css";
import Products from "../../components/productcatagory/Products";

const MenWomenCatagory = () => {
  return (
    <div className="flex-col justify-center 2xl:flex 2xl:justify-between xl:flex-col xl:justify-center md:flex-col md:justify-center sm:flex-col sm:justify-center">
      {/* women section */}
      {/* <div className="flex gap-12">
        <img
          src={women}
          alt="not found"
          className="women-catagory hover:scale-95 cursor-pointer"
        />
        <div className="w-full max-w-[21rem]">
          <h1 className="font-['Poppins'] text-black text-5xl font-bold">
            THE WOMEN'S
          </h1>
          <ul className="pt-6">
            <li className="">
              <a href="#" className="flex justify-between">
                <span className="women-catagory text-[gray] font-extralight hover:text-[#e4853f] hover:ml-3">
                  Ethnic Wear
                </span>
                <img
                  src={arrow}
                  alt="not found"
                  className="h-6 w-6 rotate-[270deg]"
                />
              </a>
            </li>

            <li className="pt-4">
              <a href="#" className="flex justify-between">
                <span className="women-catagory text-[gray] font-extralight hover:text-[#e4853f] hover:ml-3">
                  Bags and Purses
                </span>
                <img
                  src={arrow}
                  alt="not found"
                  className="h-6 w-6 rotate-[270deg]"
                />
              </a>
            </li>

            <li className="pt-4">
              <a href="#" className="flex justify-between">
                <span className="women-catagory text-[gray] font-extralight hover:text-[#e4853f] hover:ml-3">
                  Nightsuits
                </span>
                <img
                  src={arrow}
                  alt="not found"
                  className="h-6 w-6 rotate-[270deg]"
                />
              </a>
            </li>

            <li className="pt-4">
              <a href="#" className="flex justify-between">
                <span className="women-catagory text-[gray] font-extralight hover:text-[#e4853f] hover:ml-3">
                  Kurtas and Kurtis
                </span>
                <img
                  src={arrow}
                  alt="not found"
                  className="h-6 w-6 rotate-[270deg]"
                />
              </a>
            </li>

            <li className="pt-4">
              <a href="#" className="flex justify-between">
                <span className="women-catagory text-[gray] font-extralight hover:text-[#e4853f] hover:ml-3">
                  Anarkali Suits
                </span>
                <img
                  src={arrow}
                  alt="not found"
                  className="h-6 w-6 rotate-[270deg]"
                />
              </a>
            </li>

            <li className="pt-4">
              <a href="#" className="flex justify-between">
                <span className="women-catagory text-[gray] font-extralight hover:text-[#e4853f] hover:ml-3">
                  Sports Wear
                </span>
                <img
                  src={arrow}
                  alt="not found"
                  className="h-6 w-6 rotate-[270deg]"
                />
              </a>
            </li>

            <li className="pt-4">
              <a href="#" className="flex justify-between">
                <span className="women-catagory text-[gray] font-extralight hover:text-[#e4853f] hover:ml-3">
                  Nightdresses
                </span>
                <img
                  src={arrow}
                  alt="not found"
                  className="h-6 w-6 rotate-[270deg]"
                />
              </a>
            </li>

            <li className="pt-4">
              <a href="#" className="flex justify-between">
                <span className="women-catagory text-[gray] font-extralight hover:text-[#e4853f] hover:ml-3">
                  Dress Material
                </span>
                <img
                  src={arrow}
                  alt="not found"
                  className="h-6 w-6 rotate-[270deg]"
                />
              </a>
            </li>

            <li className="pt-4">
              <a href="#" className="flex justify-between">
                <span className="women-catagory text-[gray] font-extralight hover:text-[#e4853f] hover:ml-3">
                  Trousers and Capris
                </span>
                <img
                  src={arrow}
                  alt="not found"
                  className="h-6 w-6 rotate-[270deg]"
                />
              </a>
            </li>

            <li className="pt-4">
              <a href="#" className="flex justify-between">
                <span className="women-catagory text-[gray] font-extralight hover:text-[#e4853f] hover:ml-3">
                  Jwellery
                </span>
                <img
                  src={arrow}
                  alt="not found"
                  className="h-6 w-6 rotate-[270deg]"
                />
              </a>
            </li>

            <li className="pt-4">
              <a href="#" className="flex justify-between">
                <span className="women-catagory text-[gray] font-extralight hover:text-[#e4853f] hover:ml-3">
                  Shorts and Skirts
                </span>
                <img
                  src={arrow}
                  alt="not found"
                  className="h-6 w-6 rotate-[270deg]"
                />
              </a>
            </li>
          </ul>
        </div>
      </div> */}

      <div className="flex gap-12">
        <img
          src={women}
          alt="not found"
          className="women-catagory hover:scale-95 cursor-pointer"
        />
        <div className="w-full max-w-[21rem]">
          <h1 className="font-['Poppins'] text-black text-5xl font-bold">
            THE WOMEN'S
          </h1>
          <ul className="pt-6">
            {Products.map((elem) =>
              elem.clothing.map((el) =>
                el.mixProducts.map((res) => (
                  <li>
                    <a href="#" className="flex justify-between">
                      <span className="women-catagory text-[gray] font-extralight hover:text-[#e4853f] hover:ml-3">
                        {res.title}
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

      {/* men section */}
      <div className="flex gap-12">
        <img
          src={men}
          alt="not found"
          className="women-catagory hover:scale-95 cursor-pointer"
        />
        <div className="w-full max-w-[21rem]">
          <h1 className="font-['Poppins'] text-black text-5xl font-bold">
            THE MEN'S
          </h1>
          <ul className="pt-6">
            <li className="">
              <a href="#" className="flex justify-between">
                <span className="women-catagory text-[gray] font-extralight hover:text-[#e4853f] hover:ml-3">
                  Ethnic Wear
                </span>
                <img
                  src={arrow}
                  alt="not found"
                  className="h-6 w-6 rotate-[270deg]"
                />
              </a>
            </li>

            <li className="pt-4">
              <a href="#" className="flex justify-between">
                <span className="women-catagory text-[gray] font-extralight hover:text-[#e4853f] hover:ml-3">
                  Bags and Purses
                </span>
                <img
                  src={arrow}
                  alt="not found"
                  className="h-6 w-6 rotate-[270deg]"
                />
              </a>
            </li>

            <li className="pt-4">
              <a href="#" className="flex justify-between">
                <span className="women-catagory text-[gray] font-extralight hover:text-[#e4853f] hover:ml-3">
                  Nightsuits
                </span>
                <img
                  src={arrow}
                  alt="not found"
                  className="h-6 w-6 rotate-[270deg]"
                />
              </a>
            </li>

            <li className="pt-4">
              <a href="#" className="flex justify-between">
                <span className="women-catagory text-[gray] font-extralight hover:text-[#e4853f] hover:ml-3">
                  Kurtas and Kurtis
                </span>
                <img
                  src={arrow}
                  alt="not found"
                  className="h-6 w-6 rotate-[270deg]"
                />
              </a>
            </li>

            <li className="pt-4">
              <a href="#" className="flex justify-between">
                <span className="women-catagory text-[gray] font-extralight hover:text-[#e4853f] hover:ml-3">
                  Anarkali Suits
                </span>
                <img
                  src={arrow}
                  alt="not found"
                  className="h-6 w-6 rotate-[270deg]"
                />
              </a>
            </li>

            <li className="pt-4">
              <a href="#" className="flex justify-between">
                <span className="women-catagory text-[gray] font-extralight hover:text-[#e4853f] hover:ml-3">
                  Sports Wear
                </span>
                <img
                  src={arrow}
                  alt="not found"
                  className="h-6 w-6 rotate-[270deg]"
                />
              </a>
            </li>

            <li className="pt-4">
              <a href="#" className="flex justify-between">
                <span className="women-catagory text-[gray] font-extralight hover:text-[#e4853f] hover:ml-3">
                  Nightdresses
                </span>
                <img
                  src={arrow}
                  alt="not found"
                  className="h-6 w-6 rotate-[270deg]"
                />
              </a>
            </li>

            <li className="pt-4">
              <a href="#" className="flex justify-between">
                <span className="women-catagory text-[gray] font-extralight hover:text-[#e4853f] hover:ml-3">
                  Dress Material
                </span>
                <img
                  src={arrow}
                  alt="not found"
                  className="h-6 w-6 rotate-[270deg]"
                />
              </a>
            </li>

            <li className="pt-4">
              <a href="#" className="flex justify-between">
                <span className="women-catagory text-[gray] font-extralight hover:text-[#e4853f] hover:ml-3">
                  Trousers and Capris
                </span>
                <img
                  src={arrow}
                  alt="not found"
                  className="h-6 w-6 rotate-[270deg]"
                />
              </a>
            </li>

            <li className="pt-4">
              <a href="#" className="flex justify-between">
                <span className="women-catagory text-[gray] font-extralight hover:text-[#e4853f] hover:ml-3">
                  Jwellery
                </span>
                <img
                  src={arrow}
                  alt="not found"
                  className="h-6 w-6 rotate-[270deg]"
                />
              </a>
            </li>

            <li className="pt-4">
              <a href="#" className="flex justify-between">
                <span className="women-catagory text-[gray] font-extralight hover:text-[#e4853f] hover:ml-3">
                  Shorts and Skirts
                </span>
                <img
                  src={arrow}
                  alt="not found"
                  className="h-6 w-6 rotate-[270deg]"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MenWomenCatagory;
