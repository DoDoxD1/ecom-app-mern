import { IoSearch } from "react-icons/io5";
import Button from "@mui/material/Button";

function Searchbar(props) {
  return (
    <div className="headerSearch d-flex col-sm-5 ml-3 mr-2">
      <input type="text" placeholder={props.placeholder} />
      <Button>
        <IoSearch />
      </Button>
    </div>
  );
}

export default Searchbar;
