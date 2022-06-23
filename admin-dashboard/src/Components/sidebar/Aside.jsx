import React from "react";
import "./sidebar.scss";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
} from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { FiUsers, FiSettings, FiLogOut } from "react-icons/fi";
import { AiOutlineShop } from "react-icons/ai";
import { RiTruckLine, RiNotification4Line } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import { GiTakeMyMoney } from "react-icons/gi";
import { Link } from "react-router-dom";

const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  return (
    <ProSidebar
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {collapsed ? <MdOutlineDashboard /> : "Admin"}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <Link to="/">
            <MenuItem icon={<FaTachometerAlt />}>Dashboard</MenuItem>
          </Link>
          <SubMenu title="Users" icon={<FiUsers />}>
            <>
              <Link to="/users">
                <MenuItem>Users List</MenuItem>
              </Link>
            </>
            <>
              <MenuItem>
                <Link to="/users/new">Add New</Link>
              </MenuItem>
            </>
          </SubMenu>

          <SubMenu title="Products" icon={<AiOutlineShop />}>
            <>
              {" "}
              <MenuItem>
                {" "}
                <Link to="/products">Products List </Link>
              </MenuItem>
            </>
            <>
              <MenuItem>
                <Link to="/products/new">Add New </Link>
              </MenuItem>
            </>
          </SubMenu>
          <MenuItem icon={<GiTakeMyMoney />}> Orders</MenuItem>
          <MenuItem icon={<RiTruckLine />}> Delivery</MenuItem>
          <MenuItem icon={<ImStatsDots />}> Stats</MenuItem>
          <MenuItem icon={<RiNotification4Line />}> Notifications</MenuItem>
          <MenuItem icon={<FaGem />}> System Health</MenuItem>
          <MenuItem icon={<FiSettings />}> Settings</MenuItem>
          <MenuItem icon={<FiLogOut />}> Log out</MenuItem>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper d-flex"
          style={{
            padding: "20px 24px",
            gap: "5px",
            justifyContent: "center",
          }}
        >
          <div className="black"></div>
          <div className="white"></div>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
