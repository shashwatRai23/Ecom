import React from "react";
import "./Navbar.css";
import logo from "./logo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import { userActions } from "../../store/userSlice";

const Navbar = () => {
  const cartState = useSelector((state) => state.cart);
  const userState = useSelector((state) => state.user);
  const user = userState.currentUser;
  const dispatch= useDispatch();
  const handleLogout=()=>{
    dispatch(userActions.logout());
  }

  return (
    <nav className="navbar">
      <div className="nav_left">
        <div className="nav_searchContainer">
          <input placeholder="Search..." />
          <SearchIcon />
        </div>
      </div>
      <Link to="/" className="nav_center">
        <img src={logo} alt="logo" />
        <div>ShopCart</div>
      </Link>
      <div className="nav_right">
        {!user && <Link to="/register">Register</Link>}
        {!user && <Link to="/login">Sign In</Link>}
        {user && <Link to="/products">Products</Link>}
        <Link to="/cart">
          <Badge badgeContent={cartState.quantity} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </Link>
        {user && (
          <button className="logout" onClick={handleLogout}>
            <LogoutIcon />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
