import download from "../../assets/images/download.png";
import order from "../../assets/images/order.png";
import clock from "../../assets/images/clock.png";
import TrendingProducts from "./TrendingProducts";

function Sidebar() {
  return (
    <div className="col-md-3 sidebar">
      <div className="banner mb-5">
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
      <div className="banner">
        <div className="content">
          <div className="top">
            <p className="text-light">Best Bakery Products</p>
          </div>
          <div className="heading">
            <h1>Fresh Products </h1>
            <h1 className="text-bold">every hour</h1>
          </div>
          <div className="subheading">
            <p>only-from</p>
          </div>
          <div className="price d-flex align-items-baseline">
            <span className="">$24.99</span>
          </div>
        </div>
        <img
          src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-banner-04.jpg"
          alt=""
          className="cursor"
        />
      </div>
      <div className="sideSection d-flex flex-column mt-5">
        <div className="d-flex justify-content-center align-items-center subSection">
          <div className="wrapper">
            <img src={download} alt="" height={35} />
          </div>
          <p>Download the Mobile App to your Phone.</p>
        </div>
        <div className="d-flex justify-content-center align-items-center subSection">
          <div className="wrapper">
            <img src={order} alt="" height={35} />
          </div>
          <p>Download the Mobile App to your Phone.</p>
        </div>
        <div className="d-flex justify-content-center align-items-center subSection">
          <div className="wrapper">
            <img src={clock} alt="" height={35} />
          </div>
          <p>Download the Mobile App to your Phone.</p>
        </div>
      </div>
      <TrendingProducts />
    </div>
  );
}

export default Sidebar;
