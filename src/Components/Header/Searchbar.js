import { IoSearch } from "react-icons/io5";
import Button from "@mui/material/Button";

function Searchbar() {
  return (
    <div className="headerSearch d-flex col-sm-5 ml-3 mr-2">
      <input type="text" placeholder="Search for products..." />
      <Button>
        <IoSearch />
      </Button>
    </div>
  );
}

export default Searchbar;
