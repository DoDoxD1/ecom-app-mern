import { Button } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";
function Bannercontent(props) {
  return (
    <div className="content">
      <div className="top d-flex align-items-baseline">
        <p>Exclusive offer</p>
        <span className="ms-1">-{props.off}% OFF</span>
      </div>
      <div className="heading">
        <h1>{props.heading}</h1>
      </div>
      <div className="subheading">
        <p>Only this week. Don't miss...</p>
      </div>
      <div className="price d-flex align-items-baseline">
        <p>from</p>
        <span className="ms-1">{props.price}</span>
      </div>
      <Button>
        Shop Now
        <IoIosArrowRoundForward />
      </Button>
    </div>
  );
}
export default Bannercontent;
