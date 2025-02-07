import { AiOutlineMail } from "react-icons/ai";
import { Button } from "@mui/material";
function NewsLetter() {
  return (
    <div className="newsLetter d-flex">
      <div className="content d-flex flex-column justify-content-center">
        <h6>$20 discount for your first order</h6>
        <h3>Join our newsletter and get...</h3>
        <p>
          Join our email subscription now to get updates on promotions and
          coupons.
        </p>
        <div className="emailinput mt-3">
          <span>
            <AiOutlineMail />
          </span>
          <input type="email" placeholder="Your email address" />
          <Button>Subscribe</Button>
        </div>
      </div>
      <div className="imgWrapper">
        <img
          src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/coupon.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default NewsLetter;
