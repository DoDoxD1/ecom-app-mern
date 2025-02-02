import React from "react";
import Slider from "react-slick";
import slide1 from "../../assets/images/slide1.webp";
import slide2 from "../../assets/images/slide2.webp";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { Button } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";

import { Link } from "react-router-dom";

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
            <div className="content">
              <div className="top d-flex align-items-baseline">
                <p>Exclusive offer</p>
                <span className="ms-1">-40% OFF</span>
              </div>
              <div className="heading">
                <h1>Quality Freshness Guaranteed!</h1>
              </div>
              <div className="subheading">
                <p>Only this week. Don't miss...</p>
              </div>
              <div className="price d-flex align-items-baseline">
                <p>from</p>
                <span className="ms-1">$14.35</span>
              </div>
              <Button>
                Shop Now
                <IoIosArrowRoundForward />
              </Button>
            </div>
            <img src={slide1} alt="" className="w-100" />
          </div>
        </Link>
        <Link to="/">
          <div className="box">
            <div className="content">
              <div className="top d-flex align-items-baseline">
                <p>Exclusive offer</p>
                <span className="ms-1">-20% OFF</span>
              </div>
              <div className="heading">
                <h1>A different kind of grocery store</h1>
              </div>
              <div className="subheading">
                <h3>Only this week. Don't miss...</h3>
              </div>
              <div className="price d-flex align-items-baseline">
                <p>from</p>
                <span className="ms-1">$7.99</span>
              </div>
              <Button>
                Shop Now
                <IoIosArrowRoundForward />
              </Button>
            </div>
            <img src={slide2} alt="" className="w-100" />
          </div>
        </Link>
      </Slider>
    </div>
  );
}
export default Homebanner;
