/** @format */

import Support from "./components/bodyComponents/support/Support";
import TopProducts from "./components/bodyComponents/TopProducts";
import Banner from "./components/hero/Banner";
import Navbar from "./components/navbar/Navbar";
import TopBar from "./components/navbar/TopBar";

/** @format */
function App() {
  return (
    <div className="items-center flex flex-col justify-center">
      <div className="container px-2 md:px-4 lg:px-8 2xl:px-12">
        <TopBar />
        <Navbar />
        <Banner />
        <div className="max-w-7xl mx-auto">
          <Support />
          <TopProducts />
        </div>
      </div>
    </div>
  );
}

export default App;
