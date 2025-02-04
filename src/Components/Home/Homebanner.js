import React from "react";
import slide1 from "../../assets/images/slide1.webp";
import slide2 from "../../assets/images/slide2.webp";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { Button } from "@mui/material";

import { Link } from "react-router-dom";
import Bannercontent from "./Bannercontent";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

function Homebanner() {
  return (
    <div className="slider-container">
      <Button className="sliderButton left">
        <FaAngleLeft />
      </Button>
      <Button className="sliderButton right">
        <FaAngleRight />
      </Button>

      <Swiper
        navigation={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default Homebanner;
