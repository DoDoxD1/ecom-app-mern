import Homebanner from "../Components/Home/Homebanner";
import { Button } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import data from "../data.js";
import Rating from "@mui/material/Rating";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Home = () => {
  return (
    <div className="homeBannerSection">
      <Homebanner />
      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="banner">
                <div className="content">
                  <div className="top">
                    <p>Bacola Natural Foods</p>
                  </div>
                  <div className="heading">
                    <h1>Special Organic </h1>
                    <h1 className="text-bold">Roats Burger</h1>
                  </div>
                  <div className="subheading">
                    <p>only-from</p>
                  </div>
                  <div className="price d-flex align-items-baseline">
                    <span className="">$14.35</span>
                  </div>
                </div>
                <img
                  src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg"
                  alt=""
                  className="cursor"
                />
              </div>
            </div>
            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd">BEST SELLERS</h3>
                  <p className="text-light text-sml">
                    Do not miss the current offers until the end of March.
                  </p>
                </div>
                <Button className="viewAllBtn ms-auto">
                  View All
                  <IoIosArrowRoundForward />
                </Button>
              </div>
              <div className="product_row">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={10}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={false}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  {data.map(function (item, index) {
                    return (
                      <SwiperSlide key={index}>
                        <div className="item productItem">
                          <div className="imgWrapper">
                            <img src={item.img} alt="" className="w-100" />
                          </div>
                          <div className="description">
                            <span className="discount">{item.discount}%</span>
                            <h6 className="title">{item.title}</h6>
                            <span className="d-block inStock mb-1">
                              IN STOCK
                            </span>
                            <Rating
                              name="read-only"
                              value={item.rating}
                              precision={0.5}
                              size="small"
                              readOnly
                            />
                            <div className="price d-flex align-items-baseline">
                              <span className="oldPrice me-1">
                                ${item.oldPrice}
                              </span>
                              <span className="newPrice ms-1">
                                ${item.newPrice}
                              </span>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
