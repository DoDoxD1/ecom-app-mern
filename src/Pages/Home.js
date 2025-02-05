import Homebanner from "../Components/Home/Homebanner";
import React from "react";
import BestSellers from "../Components/Home/BestSellers.js";
import NewProducts from "../Components/Home/NewProducts.js";

const Home = () => {
  return (
    <div className="homeBannerSection">
      <Homebanner />
      <section className="homeProducts">
        <div className="container d-flex">
          <div className="col-md-3 sidebar">
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
          <div className="col-md-9 mainContent">
            <BestSellers />
            <div className="mt-3" />
            <NewProducts />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
