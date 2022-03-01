/** @format */

import NewsLetter from "../../newletter/NewsLetter";
import CmsBanner from "../mixcomponents/CmsBanner";
import Banner from "../../hero/Banner";
import ProductCatagories from "../../bodyComponents/mixcomponents/ProductCatagories";
import Opnions from "../../bodyComponents/support/Opnions";
import Support from "../../bodyComponents/support/Support";
import TopProducts from "../../bodyComponents/mixcomponents/TopProducts";
import Brand from "../../bodyComponents/brandSlider/Brand";
import NewLetterBanner from "../../newletter/NewsLetterBanner";

const HomeComponents = () => {
  return (
    <>
      <NewsLetter />

      <div className="container px-2 md:px-4 lg:px-8 2xl:px-12">
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
    </>
  );
};
export default HomeComponents;
