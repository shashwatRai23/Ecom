import React, { Fragment, useEffect, useState } from "react";
import "./Cart.css";
import Navbar from "../Components/Navbar/Navbar";
import Announcement from "../Components/Announcement/Announcement";
import Footer from "../Components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import StripeCheckout from "react-stripe-checkout";
import logo from "../Components/Navbar/logo.jpg";
import { cartActions } from "../store/cartSlice";
// import { userRequest } from "../requestMethods";
import { Link, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

const Cart = () => {
  const KEY =
    "pk_test_51LBepESDsKfkhc6uI1Gu6ViutglyVJBHWgTD08FUR8pB0iiVhUG4og94gSnJrn9d6SGdehCOQ4vHvoLPT7kopMn800QOOjVXBu";

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart.products);
  const quantity = useSelector((state) => state.cart.quantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  const removeItemHandler = (id) => {
    dispatch(cartActions.removeProduct(id));
  };

  useEffect(() => {
    stripeToken && navigate("/success");
    // const makeRequest = async () => {
    //   try {
    //     const res = await userRequest.post("/checkout/payment", {
    //       tokenId: stripeToken.id,
    //       amount: totalAmount,
    //     });
    //     navigate("/success", { data: res.data });
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // stripeToken && makeRequest();
  }, [stripeToken, totalAmount, navigate]);

  return (
    <Fragment>
      <Navbar />
      <Announcement />
      <Fragment>
        {products.length === 0 && (
          <div className="empty_cart_container">
            <div className="empty_cart">
              <RemoveShoppingCartIcon />
              <div>No items in your cart</div>
              <Link to="/products">Shop Now</Link>
            </div>
          </div>
        )}
        {products.length > 0 && (
          <div className="cart">
            <div className="cart_top">
              <button>Continue Shopping</button>
              <div>
                <span>Shopping Bag({quantity})</span>
                <span>Your Wishlist(0)</span>
              </div>
              <button>Checkout Now</button>
            </div>
            <div className="cart_bottom">
              <div className="cart_items">
                {products?.map((product) => (
                  <div className="cart_item">
                    <IconButton
                      className="remove_item"
                      onClick={() => {
                        removeItemHandler(product._id);
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                    <img
                      src={product.img}
                      alt={product.title}
                      className="cart_item_left"
                    />
                    <div className="cart_item_middle">
                      <div>
                        <b>Product : </b>
                        {product.title}
                      </div>
                      <div>
                        <b>ID : </b>
                        {product._id}
                      </div>
                      <div style={{ display: "flex", gap: "1em" }}>
                        <b>Color : </b>
                        <div
                          style={{
                            backgroundColor: product.color,
                            height: "20px",
                            width: "20px",
                            borderRadius: "50%",
                            border: "1px solid black",
                          }}
                        ></div>
                      </div>
                      <div>
                        <b>Size : </b>
                        {product.size}
                      </div>
                    </div>
                    <div className="cart_item_right">
                      <div>
                        <button>
                          <AddIcon />
                        </button>
                        <div>{product.quantity}</div>
                        <button>
                          <RemoveIcon />
                        </button>
                      </div>
                      <div className="product_price">₹ {product.price}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="order_summary">
                <div className="order_summary_heading"> Order Summary</div>
                <div className="order_summary_main">
                  <div>
                    <span>Subtotal</span>
                    <span>₹{totalAmount}</span>
                  </div>
                  <div>
                    <span>Estimated Shipping</span>
                    <span>₹50</span>
                  </div>
                  <div>
                    <span>Shipping Discount</span>
                    <span>₹ -50</span>
                  </div>
                  <div className="order_total">
                    <span>Total</span>
                    <span>₹{totalAmount}</span>
                  </div>
                </div>
                <div className="checkout">
                  <StripeCheckout
                    name="ShopCart"
                    image={logo}
                    billingAddress
                    shippingAddress
                    description={`Your total amount is ${totalAmount}`}
                    amount={totalAmount * 100}
                    token={onToken}
                    stripeKey={KEY}
                  >
                    <button>Checkout Now</button>
                  </StripeCheckout>
                </div>
              </div>
            </div>
          </div>
        )}
      </Fragment>
      <Footer />
    </Fragment>
  );
};

export default Cart;
