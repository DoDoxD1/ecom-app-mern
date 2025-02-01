import { GiHamburgerMenu } from "react-icons/gi";
import { FaAngleDown } from "react-icons/fa6";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { FaTshirt } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { IoCall } from "react-icons/io5";
import { FaBowlFood } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className="pt-3 pb-1 navigation">
      <div className="container">
        <div className="row">
          <div className="col-sm-3 categories">
            <div className="allCatTab">
              <Button className="allCat d-flex justify-content-around">
                <GiHamburgerMenu />
                <span className="text">ALL CATEGORIES</span>
                <FaAngleDown />
              </Button>
            </div>
          </div>
          <div className="col-sm-9 navTab d-flex align-items-center justify-content-center">
            <ul className="mt-3 d-flex justify-content-around align-items-center">
              <li>
                <Link to="/">
                  {" "}
                  <TiHome className="mb-1 me-1" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/">
                  {" "}
                  <FaMobileAlt className="mb-1 me-1" />
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaBagShopping className="mb-1 me-1" />
                  Bags
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaTshirt className="mb-1 me-1" /> Faishon
                </Link>
              </li>
              <li>
                <Link to="/">
                  {" "}
                  <FaBowlFood className="mb-1 me-1" />
                  Grocery
                </Link>
              </li>
              <li>
                <Link to="/">
                  {" "}
                  <IoCall className="mb-1 me-1" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
