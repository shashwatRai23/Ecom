import React, { Fragment } from "react";
import Announcement from "../Components/Announcement/Announcement";
import Navbar from "../Components/Navbar/Navbar";
import Slider from "../Components/Slider/Slider";
import Categories from "../Components/Categories/Categories";
import Products from "../Components/Product/Products";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default Home;
