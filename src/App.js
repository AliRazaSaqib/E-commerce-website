/** @format */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeComponents from "./components/bodyComponents/layout/HomeComponents";
import Layout from "./components/bodyComponents/layout/Layout";
import Contact from "./components/contact/Contact";
import Error from "./components/bodyComponents/404/Error";
import Location from "./components/bodyComponents/map/Location";
import SelectedItem from "./components/bodyComponents/itemcatagories/SelectedItem";
import CheckOut from "./components/bodyComponents/checkout/CheckOut";
import Login from "./auth/Login";
import Register from "./auth/Regsiter";
import Forget from "./auth/Forget";

/** @format */
function App() {
  return (
    <>
      <Layout>
        <div className="items-center flex flex-col justify-center">
          <Routes>
            <Route path="/" exact element={<HomeComponents />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/location" exact element={<Location />} />
            <Route path="/checkout" exact element={<CheckOut />} />
            <Route path="/items/:id" exact element={<SelectedItem />} />
            <Route path=":pageName" exact element={<Error />} />
            <Route path="login" exact element={<Login />} />
            <Route path="register" exact element={<Register />} />
            <Route path="forget" exact element={<Forget />} />
          </Routes>
        </div>
      </Layout>
    </>
  );
}

export default App;
