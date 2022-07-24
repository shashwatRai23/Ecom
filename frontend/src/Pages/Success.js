import React from "react";
import { useLocation } from "react-router-dom";
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import "./Success.css";

const Success = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="success">
      <CheckCircleOutlineRoundedIcon/>
      <div>Payment Successfull</div>
      <Link to="/">Continue Shopping</Link>
    </div>
  );
};

export default Success;
