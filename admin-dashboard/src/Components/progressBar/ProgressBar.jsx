import React from "react";
import "./progressbar.scss";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

function ProgressBar() {
  return (
    <div className="progress-container">
      <div className="d-flex title-container">
        <span className="title">Total Revenue</span>
        <BsThreeDotsVertical size={24} />
      </div>
      <div className="bar-container">
        <CircularProgressbar
          value={77}
          text={"77%"}
          styles={buildStyles({
            strokeLinecap: "butt",
          })}
          strokeWidth={3}
        />
      </div>
      <h2 className="heading">Total sales made today</h2>
      <span className="amount">452$</span>
      <p className="sub-heading">
        Previous transaction processing. Last payment may not be included
      </p>
      <div className="d-flex item-container">
        <div className="item">
          <span className="item-heading">Target</span>
          <span className="amount">
            <IoMdArrowDropup className="positive" /> 23.5k${" "}
          </span>
        </div>
        <div className="item">
          <span className="item-heading">Last Week</span>
          <span className="amount">
            <IoMdArrowDropup className="positive" /> 10.25k${" "}
          </span>
        </div>
        <div className="item">
          <span className="item-heading">Last Month</span>
          <span className="amount">
            <IoMdArrowDropdown className="negative" /> 40.45k${" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
