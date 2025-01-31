import Logo from "./Logo";
import CountryDropDown from "./CountryDropdown";
import TopStrip from "./TopStrip";
import Searchbar from "./Searchbar";
import Button from "@mui/material/Button";
import { FiUser } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Header = () => {
  return (
    <div className="headerWrapper d-flex flex-column">
      <TopStrip />
      <header className="header">
        <div className="container">
          <div className="row align-items-center">
            <Logo />
            <CountryDropDown />
            <Searchbar />
            <div className="part-3 d-flex align-items-center justify-content-center col-sm-2 ms-auto">
              <Button className="circle  me-3">
                <FiUser />
              </Button>
              <div className="cartTab d-flex align-items-center">
                <span className="price">$3.29</span>
                <div className="position-relative ms-3">
                  <Button className="circle cart ">
                    <HiOutlineShoppingBag />
                  </Button>
                  <span className="count  d-flex align-items-cente justify-content-center">
                    1
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
