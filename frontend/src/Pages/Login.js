import React, { Fragment, useState } from "react";
// import Navbar from "../Components/Navbar/Navbar";
import "./Login.css";
import logo from "../Components/Navbar/logo.jpg";
import { login } from "../store/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Components/Loader/Loader";
import { Alert } from "@mui/material";

const Login = () => {
  const userState = useSelector((state) => state.user);
  const loading = userState.loading;

  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Fragment>
      {userState.error && (
        <Alert severity="error" className="alert">
          Invalid username or Password
        </Alert>
      )}
      {loading ? (
        <Loader />
      ) : (
        <div className="login">
          <div className="login_left">
            <div className="login_left_heading">
              <h2>Login</h2>
              <img alt="logo" src={logo} />
            </div>
            <form onSubmit={submitHandler}>
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button>login</button>
            </form>
          </div>
          <div className="login_right">
            <div className="overlay">
              <div className="overlay_heading">
                <h3>New Here ?</h3>
                <div>Sign Up and discover Amazing Products</div>
              </div>
              <button>Sign Up</button>
            </div>
            <img
              alt="bg"
              src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Login;
