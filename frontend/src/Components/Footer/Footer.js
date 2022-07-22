import React from "react";
import "./Footer.css";
import logo from "../Navbar/logo.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_info">
        <div className="footer_info_logo">
          <img src={logo} alt="logo" />
          <div>ShopCart</div>
        </div>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <div className="footer_socialIcons">
          <FacebookRoundedIcon style={{backgroundColor:"#3b5999"}}/>
          <InstagramIcon style={{backgroundColor:"#e4405f"}}/>
          <TwitterIcon style={{backgroundColor:"#55acee"}}/>
          <PinterestIcon style={{backgroundColor:"#e60023"}}/>
        </div>
      </div>
      <div className="footer_usefulLinks">
        <h3>Useful Links</h3>
        <div className="footer_links">
          <div>
            <a href="/">Home</a>
            <a href="/">Man Fashion</a>
            <a href="/">Accessories</a>
            <a href="/">Order Tracking</a>
            <a href="/">Wishlist</a>
          </div>
          <div>
            <a href="/">Cart</a>
            <a href="/">Women Fashion</a>
            <a href="/">My Account</a>
            <a href="/">Terms</a>
            <a href="/">Gallery</a>
          </div>
        </div>
      </div>
      <div className="footer_contact">
        <h3>Contact</h3>
        <div className="footer_contact_info">
          <div>
            <LocationOnIcon />
            412, 4th Phase, Ashapurna City, Pal Gaon, Jodhpur
          </div>
          <div>
            <AddIcCallIcon />
            +91 8278614819
          </div>
          <div>
            <EmailOutlinedIcon />
            shashwatr05@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
