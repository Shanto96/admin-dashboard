import React from "react";
import "./widget.scss";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { BsPerson, BsFillCartCheckFill } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiWalletAlt } from "react-icons/bi";
function Widget({ type }) {
  let data;
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        amount: (
          <span className="count" style={{ color: "#C5E478" }}>
            1232
          </span>
        ),
        percentage: (
          <div className="percentage-container">
            <IoMdArrowDropup size={30} style={{ color: "green" }} /> 30%
          </div>
        ),
        link: "see all users",
        icon: (
          <BsPerson
            size={25}
            className="widget-icon"
            style={{ background: "#C5E478" }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        amount: (
          <span style={{ color: "#ff986bde" }} className="count">
            897
          </span>
        ),
        percentage: (
          <div className="percentage-container">
            <IoMdArrowDropdown size={30} style={{ color: "red" }} /> 15%
          </div>
        ),
        link: "view all orders",
        icon: (
          <BsFillCartCheckFill
            size={25}
            className="widget-icon"
            style={{ background: "#ff986bde" }}
          />
        ),
      };
      break;
    case "revenue":
      data = {
        title: "REVENUE",
        amount: (
          <span className="count" style={{ color: "#DA70B4" }}>
            1232$
          </span>
        ),
        percentage: (
          <div className="percentage-container">
            <IoMdArrowDropup size={30} style={{ color: "green" }} /> 70%
          </div>
        ),
        link: "view history",
        icon: (
          <RiMoneyDollarCircleLine
            size={25}
            className="widget-icon"
            style={{ background: "#DA70B4" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: " BALANCE",
        amount: (
          <span className="count" style={{ color: "#54a6ffe0" }}>
            450$
          </span>
        ),
        percentage: (
          <div className="percentage-container">
            <IoMdArrowDropup size={30} style={{ color: "green" }} /> 35%
          </div>
        ),
        link: "view statement",
        icon: (
          <BiWalletAlt
            size={25}
            className="widget-icon"
            style={{ background: "#54a6ffe0" }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="d-flex widget">
      <div className="left">
        <span className="title">{data.title}</span>
        {data.amount}
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        {data.percentage}
        <div className="icon-container">{data.icon}</div>
      </div>
    </div>
  );
}

export default Widget;
