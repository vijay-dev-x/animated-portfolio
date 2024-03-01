import "./Navbar.scss";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";
import Sidebar from "../hamburgar/Sidebar";

function Navbar() {
  return (
    <div className="navbar">
      {/* <Sidebar>s</Sidebar> */}
      <div className="navbar-wrapper">
        <div className="left-nav">
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          ></motion.h2>
        </div>
        <div className="right-nav">
          <span>
            <FaInstagram></FaInstagram>
          </span>
          <span>
            <FaGithub></FaGithub>
          </span>
          <span>
            <FaLinkedin></FaLinkedin>
          </span>
          <span>
            <SiGmail></SiGmail>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
