import React from "react";
import { useState } from "react";
import "./sidebar.scss";
import Aside from "./Aside";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };
  return (
    <div className="sidebar-container">
      <Aside collapsed={collapsed} />

      {collapsed ? (
        <div className="collapse-container right">
          <RiArrowRightSLine
            onClick={() => handleCollapsedChange(!collapsed)}
            size={30}
            className="right"
          />
        </div>
      ) : (
        <div className="collapse-container">
          <RiArrowLeftSLine
            onClick={() => handleCollapsedChange(!collapsed)}
            size={30}
          />
        </div>
      )}
    </div>
  );
}

export default Sidebar;
