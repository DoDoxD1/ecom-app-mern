import * as React from "react";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Searchbar from "./Searchbar";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function CountryDropDown() {
  const [isOpenModal, setisOpenModal] = useState(false);

  return (
    <div className="col-sm-2 d-flex-align-items-center part2">
      <Button id="countryDrop" onClick={() => setisOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">Select a Location</span>
        </div>
        <span className="ml-auto" id="dropdown-icon">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog
        open={isOpenModal}
        TransitionComponent={Transition}
        onClose={() => setisOpenModal(false)}
        className="locationModal mt-5 mb-5 p-4"
      >
        <DialogTitle>Set backup account</DialogTitle>
        <div className="heading ps-4 pe-3">
          <h6 className="mb-4 ms-1">
            Enter your address and we will specify the offer for your area.
          </h6>
          <div className="close_">
            <Button className="" onClick={() => setisOpenModal(false)}>
              <RxCross2 />
            </Button>
          </div>
          <Searchbar placeholder={"Search your area"} />
          <div className="countryList ">
            <ul className="list mt-3 " onClick={() => setisOpenModal(false)}>
              <li className="list-item d-flex justify-content-between">
                <span className="text">Select a Location</span>{" "}
                <Button className="listButton">Clear all</Button>
              </li>
              <li className="list-item d-flex justify-content-between">
                <span className="text">India</span>{" "}
                <Button className="listButton">Min: $130</Button>
              </li>
              <li className="list-item d-flex justify-content-between">
                <span className="text">Sri Lanks</span>{" "}
                <Button className="listButton">Min: $160</Button>
              </li>
              <li className="list-item d-flex justify-content-between">
                <span className="text">America</span>{" "}
                <Button className="listButton">Min: $150</Button>
              </li>
              <li className="list-item d-flex justify-content-between">
                <span className="text">Canada</span>{" "}
                <Button className="listButton">Min: $100</Button>
              </li>
              <li className="list-item d-flex justify-content-between">
                <span className="text">Kenya</span>{" "}
                <Button className="listButton">Min: $150</Button>
              </li>
              <li className="list-item d-flex justify-content-between">
                <span className="text">India</span>{" "}
                <Button className="listButton">Min: $130</Button>
              </li>
              <li className="list-item d-flex justify-content-between">
                <span className="text">Sri Lanks</span>{" "}
                <Button className="listButton">Min: $160</Button>
              </li>
              <li className="list-item d-flex justify-content-between">
                <span className="text">America</span>{" "}
                <Button className="listButton">Min: $150</Button>
              </li>
              <li className="list-item d-flex justify-content-between">
                <span className="text">Canada</span>{" "}
                <Button className="listButton">Min: $100</Button>
              </li>
              <li className="list-item d-flex justify-content-between">
                <span className="text">Kenya</span>{" "}
                <Button className="listButton">Min: $150</Button>
              </li>
            </ul>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default CountryDropDown;
