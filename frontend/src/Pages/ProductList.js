import React, { Fragment, useState } from "react";
import Products from "../Components/Product/Products";
import "./ProductList.css";
import Navbar from "../Components/Navbar/Navbar";
import Announcement from "../Components/Announcement/Announcement";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";
import { useLocation } from "react-router-dom";

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters((prevState) => {
      return {
        ...prevState,
        [e.target.name]: value,
      };
    });
  };

  return (
    <Fragment>
      <Navbar />
      <Announcement />
      <div className="productList">
        <h1>{category}</h1>
        <div className="productList_filter">
          <div className="filter_products">
            <h3>Filter Products: </h3>
            <select name="color" onChange={handleFilters}>
              <option disabled>Color</option>
              <option>white</option>
              <option>black</option>
              <option>red</option>
              <option>blue</option>
              <option>yellow</option>
              <option>green</option>
            </select>
            <select name="size" onChange={handleFilters}>
              <option disabled>Size</option>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
          <div className="sort_products">
            <h3>Sort Products: </h3>
            <select
              onChange={(e) => {
                setSort(e.target.value);
              }}
            >
              <option value="newest">Newest</option>
              <option value="asc">Price(asc)</option>
              <option value="dsc">Price(dsc)</option>
            </select>
          </div>
        </div>
        <Products category={category} filters={filters} sort={sort} />
      </div>
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default ProductList;
