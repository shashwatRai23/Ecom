import Navbar from "../Components/Navbar/Navbar";
import { Fragment, useState, useEffect } from "react";
import Announcement from "../Components/Announcement/Announcement";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { cartActions } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productId = location.pathname.split("/")[2];
  const user = useSelector((state) => state.user.currentUser);
  // const products = useSelector((state) => state.cart.products);
  const [fetchedProduct, setFetchedProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(
    fetchedProduct.size ? fetchedProduct.size[0] : ""
  );
  const [color, setColor] = useState("");

  const handleQuantity = (type) => {
    if (type === "inc") setQuantity(quantity + 1);
    else setQuantity(quantity > 1 ? quantity - 1 : quantity);
  };

  const handleCartActions = () => {
    if (user) {
      dispatch(
        cartActions.addProduct({
          ...fetchedProduct,
          quantity,
          color,
          size,
        })
      );
    } else navigate("/login");
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`products/find/${productId}`);
        setFetchedProduct(res.data);
        setSize(res.data.size ? res.data.size[0] : "");
      } catch (err) {}
    };
    getProduct();
  }, [productId]);

  // useEffect(() => {
  //   const addToCart = async () => {
  //     try {
  //       const res = await userRequest.post("/carts", products);
  //       console.log(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  // }, [products]);
  return (
    <Fragment>
      <Navbar />
      <Announcement />
      <div className="productPage">
        <div className="productPage_image">
          <img src={fetchedProduct.img} alt="product_img" />
        </div>
        <div className="productPage_info">
          <div className="productPage_title">{fetchedProduct.title}</div>
          <div className="productPage_desc">{fetchedProduct.desc}</div>
          <div className="productPage_price">₹ {fetchedProduct.price}</div>
          <div className="productPage_filters">
            <div className="color_filter">
              Color
              {fetchedProduct.color?.map((c) => (
                <div
                  key={c}
                  onClick={() => {
                    setColor(c);
                  }}
                  className="color_box"
                  style={{
                    backgroundColor: `${c}`,
                  }}
                ></div>
              ))}
            </div>
            <div className="size_filter">
              Size{" "}
              <select
                className="size"
                onChange={(e) => {
                  setSize(e.target.value);
                }}
              >
                {fetchedProduct.size?.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="productPage_last">
            <div className="quantity">
              <button onClick={() => handleQuantity("dec")}>-</button>
              <div>{quantity}</div>
              <button onClick={() => handleQuantity("inc")}>+</button>
            </div>
            <button className="addtocart" onClick={handleCartActions}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default Product;
