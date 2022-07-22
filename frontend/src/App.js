import React, { Fragment} from "react";
import "./App.css";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Cart from "./Pages/Cart";
import ProductList from "./Pages/ProductList";
import Success from "./Pages/Success";
import {useSelector} from "react-redux"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  // const [user, setUser] = useState(true);
  const userState = useSelector((state) => state.user);
  const user = userState.currentUser;

  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/products/:category" exact element={<ProductList />} />
        </Routes>
        <Routes>
          <Route path="/products/" exact element={<ProductList />} />
        </Routes>
        <Routes>
          <Route path="/product/:id" exact element={<Product />} />
        </Routes>
        <Routes>
          <Route
            path="/login"
            exact
            element={user ? <Navigate to="/" /> : <Login />}
          />
        </Routes>
        <Routes>
          <Route
            path="/register"
            exact
            element={user ? <Navigate to="/" /> : <Register />}
          />
        </Routes>
        <Routes>
          <Route path="/cart" exact element={<Cart />} />
        </Routes>
        <Routes>
          <Route path="/success" exact element={<Success />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
