import Homebanner from "../Components/Home/Homebanner";

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
                <div className="info">
                  <h3 className="mb-0 hd">BEST SELLERS</h3>
                  <p className="text-light text-sml">
                    Do not miss the current offers until the end of March.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
