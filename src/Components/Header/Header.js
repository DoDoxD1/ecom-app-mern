import Logo from "./Logo";
import CountryDropDown from "./CountryDropdown";
import TopStrip from "./TopStrip";
import Searchbar from "./Searchbar";
import Navbar from "./Navbar";
import CartSection from "./CartSection";

const Header = () => {
  return (
    <div className="headerWrapper d-flex flex-column">
      <TopStrip />
      <header className="header">
        <div className="container">
          <div className="row align-items-center">
            <Logo />
            <CountryDropDown />
            <div className="searchBarWrapper">
              <Searchbar placeholder={"Search for products..."} />
            </div>
            <CartSection />
          </div>
        </div>
      </header>
      <Navbar />
    </div>
  );
};

export default Header;
