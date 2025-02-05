import data from "../../data.js";
import { Button } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import ProductItem from "./ProductItem.js";
function NewProducts() {
  return (
    <div className=" newProducts">
      <div className="d-flex align-items-center">
        <div className="info w-75">
          <h3 className="mb-0 hd">NEW PRODUCTS</h3>
          <p className="text-light text-sml">
            New products with updated stocks.
          </p>
        </div>
        <Button className="viewAllBtn ms-auto">
          View All
          <IoIosArrowRoundForward />
        </Button>
      </div>
      <div className="productRow2 d-flex">
        {data.map(function (elem, index) {
          return (
            <div className="newProductItem" key={index}>
              <ProductItem item={elem} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewProducts;
