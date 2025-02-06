import Homebanner from "../Components/Home/Homebanner";
import React from "react";
import BestSellers from "../Components/Home/BestSellers.js";
import NewProducts from "../Components/Home/NewProducts.js";
import Sidebar from "../Components/Home/Sidebar.js";
import safetyImg from "../assets/images/safety.png";

const Home = () => {
  return (
    <div className="homeBannerSection">
      <Homebanner />
      <section className="homeProducts">
        <div className="container d-flex">
          <Sidebar />
          <div className="col-md-9 mainContent">
            <BestSellers />
            <div className="mt-4 mb-4 careBanner d-flex">
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
            <NewProducts />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
