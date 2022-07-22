import React, { useState, Fragment } from "react";
import "./Login.css";
import logo from "../Components/Navbar/logo.jpg";
import { userRequest } from "../requestMethods";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";

const Register = () => {
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitCondition =
      email.includes("@") &&
      firstname.length > 0 &&
      lastname.length > 0 &&
      username.length > 0 &&
      password.length > 4 &&
      password === confirmPassword;
    if (submitCondition) {
      try {
        await userRequest.post("/auth/register", {
          username,
          email,
          password,
        });
        navigate("/login");
      } catch (err) {
        if (err.response.data.keyValue.email)
          setError("This email has already been registered");
        else if (err.response.data.keyValue.username)
          setError("Username must be unique");
        else setError(err.message);
      }
    } else setError("Incorrect Credentials");
    console.log(
      firstname,
      lastname,
      username,
      email,
      password,
      confirmPassword
    );
  };

  return (
    <Fragment>
      {error && (
        <Alert
          severity="error"
          className="alert"
          onClose={() => setError(false)}
        >
          {error}
        </Alert>
      )}
      <div className="login register">
        <div className="login_right">
          <div className="overlay">
            <div className="overlay_heading">
              <h3>Already Have an Account ?</h3>
              <div> Login Here</div>
            </div>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
          <img
            alt="bg"
            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          />
        </div>
        <div className="login_left register_left">
          <div className="login_left_heading register_left_heading">
            <h2>Sign Up</h2>
            <img alt="logo" src={logo} />
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Firstname"
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              type="text"
              placeholder="Lastname"
              onChange={(e) => setLastname(e.target.value)}
            />
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
