import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { motion } from "framer-motion";
import Logo from "./profile.png";
import { SidebarData } from "./Data";
import "./sidebar.css";
import { Navigate, NavLink } from "react-router-dom";
import cookie from "react-cookies";

const Sidebar = ({ userData }) => {
  const [selected, setSelected] = useState();
  const [expanded, setExpanded] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
      display: "none",
    },
  };

  const handleLogout = (e) => {
    e.preventDefault();
    cookie.remove("access_token", { path: "/" });
    setLoggedOut(true);
  };


  return (
    <>
      <div className="side-comp">
        {loggedOut && <Navigate to="/" replace={true} />}
        <div
          className="side-comp__bars"
          style={expanded ? { left: "65%" } : { left: "5%" }}
          onClick={() => setExpanded(!expanded)}
        >
          <MenuIcon />
        </div>
        <motion.div
          className="side-comp__sidebar"
          variants={sidebarVariants}
          animate={window.innerWidth <= 800 ? `${expanded}` : ""}
        >
          {/* logo */}
          <div className="side-comp__logo">
            <img src={Logo} alt="logo" />
            <span>
            {userData && userData.name}
            </span>
          </div>

          {/* menu */}
          <div className="side-comp__menu">
            {SidebarData.map((item, index) => {
              return (
                <NavLink
                  to={item.path}
                  className={
                    selected === index ? "menuItem active" : "menuItem"
                  }
                  key={index}
                  onClick={() => setSelected(index)}
                >
                  <item.icon />
                  <span>{item.heading}</span>
                </NavLink>
              );
            })}

            {/* signoutIcon */}
            <div className="menuItem" onClick={(e) => handleLogout(e)}>
              <LogoutIcon />
              <span>Logout</span>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Sidebar;
