import { BsArrowsFullscreen } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";

function ProductItem(props) {
  return (
    <div className="item productItem">
      <div className="imgWrapper mb-1">
        <img src={props.item.img} alt="" className="w-100" />
      </div>
      <div className="description">
        <span className="discount">{props.item.discount}%</span>
        <div className="actions d-flex flex-column gap-2">
          <Button className="shadow-sm d-flex justify-content-center align-items-center">
            <BsArrowsFullscreen />
          </Button>
          <Button className="shadow-sm d-flex justify-content-center align-items-center">
            <FaRegHeart />
          </Button>
        </div>
        <h6 className="title">{props.item.title}</h6>
        <span className="d-block inStock mb-1">IN STOCK</span>
        <Rating
          name="read-only"
          value={props.item.rating}
          precision={0.5}
          size="small"
          readOnly
        />
        <div className="price d-flex align-items-baseline">
          <span className="oldPrice me-1">${props.item.oldPrice}</span>
          <span className="newPrice ms-1">${props.item.newPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
