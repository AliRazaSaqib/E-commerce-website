/** @format */

import CmsBanner from "./components/bodyComponents/CmsBanner";
import Support from "./components/bodyComponents/support/Support";
import TopProducts from "./components/bodyComponents/TopProducts";
import Banner from "./components/hero/Banner";
import Navbar from "./components/navbar/Navbar";
import TopBar from "./components/navbar/TopBar";
import "./App.css";
import Opnions from "./components/bodyComponents/support/Opnions";
import ProductCatagories from "./components/bodyComponents/ProductCatagories";
import NewsLetter from "./components/newletter/NewsLetter";
import MenWomenCatagory from "./components/bodyComponents/MenWomenCatagory";
import Products from "./components/productcatagory/Products";

/** @format */
function App() {
  return (
    <div className="items-center flex flex-col justify-center">
      <NewsLetter />
      <div className="container px-2 md:px-4 lg:px-8 2xl:px-12">
        <TopBar />
        <Navbar />
        <Banner />
        <div className="max-w-7xl mx-auto">
          <Support />
          <TopProducts />
        </div>
      </div>
      <div className="pt-14 container w-full">
        <CmsBanner />
      </div>
      <div className="pt-20 container px-2 md:px-4 lg:px-8 2xl:px-12">
        <div className="max-w-7xl mx-auto">
          <Opnions />
          <ProductCatagories />
          <MenWomenCatagory />
        </div>
      </div>
      {/* <Products /> */}
    </div>
  );
}

export default App;
