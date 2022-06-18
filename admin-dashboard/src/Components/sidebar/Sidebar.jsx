import React from "react";
import { useState } from "react";
import "./sidebar.scss";
import Aside from "./Aside";
import { RiArrowLeftSLine } from "react-icons/ri";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };
  return (
    <div className="sidebar-container">
      <Aside collapsed={collapsed} />
      <div className="collapse-container"></div>
      <RiArrowLeftSLine onClick={() => handleCollapsedChange(!collapsed)} />
    </div>
  );
}

export default Sidebar;
