import React from "react";
import { MdOutlineNotificationsNone, MdSettings } from "react-icons/md";
import { BsEnvelope, BsGlobe2 } from "react-icons/bs";
import "./navbar.scss";
function Navbar() {
  return (
    <div className="d-flex navbar-container w-100">
      <div className="icon-wraper d-flex ">
        <div className="single-icon">
          <MdOutlineNotificationsNone size={24} />
        </div>{" "}
        <div className="single-icon">
          <BsEnvelope size={20} />
        </div>{" "}
        <div className="single-icon">
          <BsGlobe2 size={20} />
          <span className="language">&nbsp;&nbsp;English</span>
        </div>{" "}
        <div className="single-icon">
          <img
            src="https://www.freehindiwishes.com/wp-content/uploads/2020/10/Stylish-Muslim-Girl-Dp-For-Fb-Profile.jpg"
            alt=""
            className="user-img"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
