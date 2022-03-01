/** @format */

import React from "react";
import TopBar from "../../navbar/TopBar";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  const renderAuth = () => {
    if (
      pathname === "/login" ||
      pathname === "/register" ||
      pathname === "/forget"
    )
      return <>{children}</>;
    else {
      return (
        <>
          <div>
            <div className="items-center flex flex-col justify-center">
              <div className="container px-2 md:px-4 lg:px-8 2xl:px-12 ">
                <TopBar />
                <Navbar />
              </div>
            </div>

            {children}

            <Footer />
          </div>
        </>
      );
    }
  };
  return <>{renderAuth()}</>;
  // return (
  //   <>
  //     <div>
  //       <div className="items-center flex flex-col justify-center">
  //         <div className="container px-2 md:px-4 lg:px-8 2xl:px-12 ">
  //           <TopBar />
  //           <Navbar />
  //         </div>
  //       </div>

  //       {children}

  //       <Footer />
  //     </div>
  //   </>
  // );
};

export default Layout;
