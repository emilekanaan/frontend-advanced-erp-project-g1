import React, { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { motion } from "framer-motion";

import Logo from "./profile.png";
import { SidebarData } from "./Data";
import "./sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [selected, setSelected] = useState();
  const [expanded, setExpanded] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  console.log(window.innerWidth);

  return (
    <>
      <div className="side-comp">
        <div
          className="side-comp__bars"
          style={expanded ? { left: "60%" } : { left: "5%" }}
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
              E<span>R</span>P
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
            <div className="menuItem">
              <LogoutIcon />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Sidebar;