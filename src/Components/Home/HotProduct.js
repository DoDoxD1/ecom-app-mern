import { Button } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";
import Timer from "./Timer";

function HotProduct() {
  return (
    <div className="productRow bestSellers hotProducts space-bottom">
      <div className="d-flex align-items-center">
        <div className="info w-75">
          <div className="d-flex">
            <h3 className="mb-0 hd">HOT PRODUCT FOR </h3>
            <h3 className="mb-0 hd red">&nbsp; THIS WEEK </h3>
          </div>
          <p className="text-light text-sml">
            Dont miss this opportunity at a special discount just for this week.
          </p>
        </div>
        <Button className="viewAllBtn ms-auto">
          View All
          <IoIosArrowRoundForward />
        </Button>
      </div>

      <div className="content mt-3">
        <div className="d-flex left">
          <img
            className="w-25 p-5"
            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-50.jpg"
            alt=""
          />
          <span className="badge d-flex align-items-center justify-content-center">
            14%
          </span>
          <div className="d-flex flex-column right w-75">
            <div className="d-flex price align-items-center">
              <span className="oldPrice me-1">$5.49</span>
              <span className="newPrice ms-1">$4.49</span>
            </div>
            <h3 className="heading">Chobani Complete Vanilla Greek Yogurt</h3>
            <div className="d-flex align-items-baseline">
              <p className="text-light weight">1 kg</p>
              <span className="inStock ms-2">IN STOCK</span>
            </div>
            <div className="progress">
              <span className="progress-done"></span>
            </div>

            <div className="d-flex align-items-center">
              <Timer />
              <p className="ms-4 timer-text mt-3">
                Remains until the end of the offer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotProduct;
