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
import NewLetterBanner from "./components/newletter/NewsLetterBanner";
import Footer from "./components/footer/Footer";
import Brand from "./components/bodyComponents/brandSlider/Brand";

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

      <div className="pt-14  w-full">
        <CmsBanner />
      </div>

      <div className="pt-20 container px-2 md:px-4 lg:px-8 2xl:px-12">
        <div className="max-w-7xl mx-auto">
          <Opnions />
          <ProductCatagories />
        </div>
      </div>

      <div className="w-full">
        <NewLetterBanner />
      </div>

      <div className="pt-16 container px-2 md:px-4 lg:px-8 2xl:px-12">
        <div className="max-w-7xl mx-auto">
          <Brand />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
