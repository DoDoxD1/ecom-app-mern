import * as React from "react";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Searchbar from "./Searchbar";
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect } from "react";
import Slide from "@mui/material/Slide";
import { useContext } from "react";
import { MyContext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function CountryDropDown() {
  const [isOpenModal, setisOpenModal] = useState(false);
  const [selectedTab, setselectedTab] = useState("");
  const [countryList, setcountryList] = useState([]);
  const context = useContext(MyContext);

  useEffect(() => {
    setcountryList(context.countryList);
  }, []);

  const selectCountry = (index) => {
    setselectedTab(countryList[index].country);
    setisOpenModal(false);
  };

  function filterList(e) {
    const keyword = e.target.value.toLowerCase();
    if (keyword !== "") {
      const list = countryList.filter((item) => {
        return item.country.toLowerCase().includes(keyword);
      });
      setcountryList(list);
    } else {
      setcountryList(context.countryList);
    }
  }

  return (
    <div className="col-sm-2 d-flex-align-items-center part2">
      <Button id="countryDrop" onClick={() => setisOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">{`${
            selectedTab === ""
              ? "Select a Location"
              : selectedTab.length > 12
              ? selectedTab.substring(0, 15) + "...."
              : selectedTab.substring(0, 15)
          }`}</span>
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
          <Searchbar placeholder={"Search your area"} onChange={filterList} />
          <div className="countryList ">
            <ul className="list mt-3 ">
              {countryList?.length !== 0 &&
                countryList?.map((item, index) => {
                  return (
                    <li
                      className="list-item d-flex justify-content-between w-100"
                      onClick={() => selectCountry(index)}
                      key={index}
                    >
                      <Button
                        className={
                          `${selectedTab === item.country ? "active " : ""}` +
                          "countryButton d-flex justify-content-between w-100"
                        }
                      >
                        <span className="text">{item.country}</span>{" "}
                        <Button className="listButton">Min: $150</Button>
                      </Button>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default CountryDropDown;
