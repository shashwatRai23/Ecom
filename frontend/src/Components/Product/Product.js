import React from "react";
import "./Product.css";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <div className="product">
      <img src={props.img} alt="product" />
      <div className="product_wrapper"></div>
      <div className="product_icons">
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <Link to={`/product/${props.id}`}>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Link>
        <IconButton>
          <ShoppingCartIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Product;
