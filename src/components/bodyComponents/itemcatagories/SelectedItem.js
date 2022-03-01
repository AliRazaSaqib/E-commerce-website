/** @format */
import image from "../../../assets/sub-banner-1.jpg";
import "../../../App.css";
import { useParams } from "react-router-dom";
import Women from "../../productsVariation/Women";
import { useEffect } from "react";
import { useState } from "react";
import { paramCase } from "param-case";
const SelectedItem = () => {
  const { id } = useParams();
  const [filteredProd, setFilteredProd] = useState([]);

  useEffect(() => {
    const filterItems = Women.map((el) => el);

    const getFilterData = filterItems.filter((elem) => elem.userId === id);
    setFilteredProd(getFilterData);
  }, []);

  return (
    <div className="grid grid-cols-1 p-2 gap-8 pb-12 pt-12 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1"></div>
  );
};
export default SelectedItem;
