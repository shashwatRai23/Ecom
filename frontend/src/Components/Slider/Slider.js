import React, { useState } from "react";
import "./Slider.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { IconButton } from "@mui/material";
import styled from "@emotion/styled";
import { sliderItems } from "../../data";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  position: absolute;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slideLeft = () => {
    setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
  };
  const slideRight = () => {
    setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
  };

  return (
    <div className="slider">
      <div className="arrow arrow_left">
        <IconButton onClick={slideLeft}>
          <ArrowBackIosNewIcon />
        </IconButton>
      </div>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <div
            key={item.id}
            className="slider_container"
            style={{ backgroundColor : item.bg}}
          >
            <div className="slider_image">
              <img alt="slider_image" src={item.img} />
            </div>
            <div className="slider_info">
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
              <button>SHOP NOW</button>
            </div>
          </div>
        ))}
      </Wrapper>
      <div className="arrow arrow_right">
        <IconButton onClick={slideRight}>
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Slider;
