import React from "react";
import "./widget.scss";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
function Widget({ type }) {
  return (
    <div className="d-flex widget">
      <div className="left">
        <span className="title">User</span>
        <span className="count">2154</span>
        <span className="link">see all users</span>
      </div>
      <div className="right">
        <div className="percentage-container">
          <IoMdArrowDropup size={20} /> 50%{" "}
        </div>
        <div className="icon-container">
          <BsPerson size={25} className="widget-icon" />
        </div>
      </div>
    </div>
  );
}

export default Widget;
