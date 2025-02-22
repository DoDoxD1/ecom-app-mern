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
import { GiRunningShoe } from "react-icons/gi";
import { CgGirl } from "react-icons/cg";

function Navbar() {
  return (
    <nav className="pt-3 pb-1 navigation">
      <div className="container">
        <div className="row">
          <div className="col-sm-3 categories">
            <div className="catWrapper">
              <div className="allCatTab">
                <Button className="allCat d-flex justify-content-around">
                  <GiHamburgerMenu />
                  <span className="text">ALL CATEGORIES</span>
                  <FaAngleDown />
                </Button>
                <div className="sidebarNav  ">
                  <ul className="">
                    <li>
                      <Link to="/">
                        <FaMobileAlt className="mb-1 me-1" /> Electronics
                      </Link>
                      <div className="submenu ">
                        <Link to="/"> Mobiles</Link>
                        <Link to="/"> Tablets</Link>
                        <Link to="/"> Computers</Link>
                        <Link to="/"> Smart Watches </Link>
                        <Link to="/"> Refrigerators </Link>
                      </div>
                    </li>
                    <li>
                      <Link to="/">
                        {" "}
                        <FaTshirt className="mb-1 me-1" />
                        Faishon
                      </Link>
                      <div className="submenu  ">
                        <Link to="/"> Men</Link>
                        <Link to="/"> Women</Link>
                        <Link to="/"> Kids</Link>
                      </div>
                    </li>
                    <li>
                      <Link to="/">
                        <FaBagShopping className="mb-1 me-1" /> Bags
                      </Link>
                      <div className="submenu ">
                        <Link to="/"> Handbag</Link>
                        <Link to="/"> Women Bags</Link>
                        <Link to="/"> Men Bags</Link>
                      </div>
                    </li>
                    <li>
                      <Link to="/">
                        <GiRunningShoe className="mb-1 me-1" /> Footwear
                      </Link>
                      <div className="submenu ">
                        <Link to="/"> Men</Link>
                        <Link to="/"> Women</Link>
                        <Link to="/"> Kids</Link>
                      </div>
                    </li>
                    <li>
                      <Link to="/">
                        {" "}
                        <FaBowlFood className="mb-1 me-1" />
                        Groceries
                      </Link>
                      <div className="submenu ">
                        <Link to="/"> Daily</Link>
                        <Link to="/"> Vegetables</Link>
                        <Link to="/"> Foods</Link>
                        <Link to="/"> Cafe</Link>
                      </div>
                    </li>
                    <li>
                      <Link to="/">
                        {" "}
                        <CgGirl className="mb-1 me-1" />
                        Beauty
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-9 navTab d-flex align-items-center justify-content-center">
            <ul className="mt-2 d-flex justify-content-around align-items-center">
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
                <div className="submenu d-flex flex-column shadow ms-3 ">
                  <Link to="/"> Mobiles</Link>
                  <Link to="/"> Tablets</Link>
                  <Link to="/"> Computers</Link>
                  <Link to="/"> Smart Watches</Link>
                  <Link to="/"> Refrigerators</Link>
                </div>
              </li>
              <li>
                <Link to="/">
                  <FaBagShopping className="mb-1 me-1" />
                  Bags
                </Link>
                <div className="submenu d-flex flex-column shadow ms-3 ">
                  <Link to="/"> Handbag</Link>
                  <Link to="/"> Women Bags</Link>
                  <Link to="/"> Men Bags</Link>
                </div>
              </li>
              <li>
                <Link to="/">
                  <FaTshirt className="mb-1 me-1" /> Faishon
                </Link>
                <div className="submenu d-flex flex-column shadow ms-3 ">
                  <Link to="/"> Men</Link>
                  <Link to="/"> Women</Link>
                  <Link to="/"> Kids</Link>
                </div>
              </li>
              <li>
                <Link to="/">
                  {" "}
                  <FaBowlFood className="mb-1 me-1" />
                  Grocery
                </Link>
                <div className="submenu d-flex flex-column shadow ms-3 ">
                  <Link to="/"> Daily</Link>
                  <Link to="/"> Vegetables</Link>
                  <Link to="/"> Foods</Link>
                  <Link to="/"> Cafe</Link>
                </div>
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
