import React from "react";
import Slider from "react-slick";
import slide1 from "../../assets/images/slide1.webp";
import slide2 from "../../assets/images/slide2.webp";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { Button } from "@mui/material";

import { Link } from "react-router-dom";
import Bannercontent from "./Bannercontent";

function Homebanner() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
      <Button className="sliderButton left">
        <FaAngleLeft />
      </Button>
      <Button className="sliderButton right">
        <FaAngleRight />
      </Button>
      <Slider {...settings}>
        <Link to="/">
          <div className="box">
            <Bannercontent
              heading="Quality Freshness Guaranteed!"
              price="$14.35"
              off="40"
            />
            <img src={slide1} alt="" className="w-100" />
          </div>
        </Link>
        <Link to="/">
          <div className="box">
            <Bannercontent
              heading="A different kind of grocery store"
              price="$7.99"
              off="20"
            />
            <img src={slide2} alt="" className="w-100" />
          </div>
        </Link>
      </Slider>
    </div>
  );
}
export default Homebanner;
