import React from "react";
import Slider from "react-slick";
import slide1 from "../../assets/images/slide1.avif";
import slide2 from "../../assets/images/slide2.avif";
import slide3 from "../../assets/images/slide3.avif";
import slide4 from "../../assets/images/slide4.avif";
import slide5 from "../../assets/images/slide5.avif";

function Homebanner() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={slide4} alt="" className="w-100" />
        </div>
        <div>
          <img src={slide3} alt="" className="w-100" />
        </div>
        <div>
          <img src={slide5} alt="" className="w-100" />
        </div>
        <div>
          <img src={slide1} alt="" className="w-100" />
        </div>
      </Slider>
    </div>
  );
}
export default Homebanner;
