import React, { Fragment, useEffect, useState } from "react";
import "./Product.css";
import Product from "./Product";
import axios from "axios";

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? "http://localhost:5000/api/products"
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Fragment>
      {/* <span className="products_heading"> POPULAR PRODUCTS</span> */}
      <div className="products">
        {category
          ? filteredProducts.map((product) => (
              <Product key={product._id} img={product.img} id={product._id} />
            ))
          : products
              .slice(0, 8)
              .map((product) => (
                <Product key={product._id} img={product.img} id={product._id} />
              ))}
      </div>
    </Fragment>
  );
};

export default Products;
