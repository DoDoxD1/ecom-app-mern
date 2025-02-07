import data from "../../data";

function TrendingProducts() {
  return (
    <div className="trending mt-5">
      <h3 className="">TRENDING PRODUCTS</h3>
      <div className="mt-4 products">
        {data.slice(0, 5).map((item, index) => {
          return (
            <div className="product d-flex justify-content-center align-items-center">
              <div className="wrapper">
                <img src={item.img} alt="" className="w-100" />
              </div>
              <div className="content ms-1">
                <h5 className="mb-3">{item.title}</h5>
                <div className="d-flex price align-items-baseline">
                  <span className="oldPrice me-1">${item.oldPrice}</span>
                  <span className="newPrice ms-1">${item.newPrice}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TrendingProducts;
