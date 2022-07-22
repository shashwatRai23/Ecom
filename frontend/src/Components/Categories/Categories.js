import React from "react";
import "./Categories.css";
import { categories } from "../../data";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      {categories.map((category) => (
        <Link key={category.id} to={`/products/${category.cat}`}>
          <div className="category_container">
            <img
              className="categories_img"
              src={category.img}
              alt={`img_${category.id}`}
            />
            <div className="category_info">
              <h2>{category.title}</h2>
              <button>SHOP NOW</button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
