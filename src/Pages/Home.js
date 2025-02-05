import Homebanner from "../Components/Home/Homebanner";
import React from "react";
import BestSellers from "../Components/Home/BestSellers.js";
import NewProducts from "../Components/Home/NewProducts.js";
import Sidebar from "../Components/Home/Sidebar.js";

const Home = () => {
  return (
    <div className="homeBannerSection">
      <Homebanner />
      <section className="homeProducts">
        <div className="container d-flex">
          <Sidebar />
          <div className="col-md-9 mainContent">
            <BestSellers />
            <div className="mt-5">
              {/* <img
                src="https://klbtheme.com/bacola/wp-content/plugins/bacola-core/elementor/images/banner-box2.jpg"
                alt=""
              /> */}
            </div>
            <NewProducts />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
