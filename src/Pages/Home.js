import Homebanner from "../Components/Home/Homebanner";
import React from "react";
import BestSellers from "../Components/Home/BestSellers.js";
import HotProduct from "../Components/Home/HotProduct.js";
import NewProducts from "../Components/Home/NewProducts.js";
import Sidebar from "../Components/Home/Sidebar.js";
import safetyImg from "../assets/images/safety.png";

import NewsLetter from "../Components/Home/NewsLetter.js";

const Home = () => {
  return (
    <div className="homeBannerSection">
      <Homebanner />
      <section className="homeProducts">
        <div className="container d-flex">
          <Sidebar />
          <div className="col-md-9 mainContent">
            <BestSellers />
            <div className="space-top space-bottom careBanner d-flex">
              <div className="headings  col-sm-8 d-flex justify-content-center align-items-start flex-column">
                <h6>Always Taking Care</h6>
                <h3>
                  In store or online your health & safety is our top priority.
                </h3>
              </div>
              <div className="imgWrapper me-2">
                <img src={safetyImg} alt="" className="w-100" />
              </div>
            </div>
            <HotProduct />
            <div className="couponSetion space-bottom d-flex align-items-center justify-content-center">
              <p>Super discount for your &nbsp;</p>
              <p className="underline text-bold">first purchase.</p>
              <p className="coupon me-3 ms-3">FREE25BAC</p>
              <p className="text-light text-sml">
                Use discount code in checkout!
              </p>
            </div>
            <NewProducts />
          </div>
        </div>
      </section>
      <NewsLetter />
      <footer></footer>
    </div>
  );
};

export default Home;
