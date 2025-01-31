import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";

function CountryDropDown() {
  return (
    <div className="col-sm-2 d-flex-align-items-center part2">
      <Button id="countryDrop">
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">Select a Location</span>
        </div>
        <span className="ml-auto" id="dropdown-icon">
          <FaAngleDown />
        </span>
      </Button>
    </div>
  );
}

export default CountryDropDown;
