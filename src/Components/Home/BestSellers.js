import data from "../../data.js";
import { Button } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import ProductItem from "./ProductItem.js";

function BestSellers() {
  return (
    <div className="productRow bestSellers">
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
          {data.map(function (elem, index) {
            return (
              <SwiperSlide key={index}>
                <ProductItem item={elem} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
export default BestSellers;
