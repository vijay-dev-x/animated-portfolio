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
          <a target="_blank" href="https://www.instagram.com/vijay_dev.x/">
            <FaInstagram></FaInstagram>
          </a>
          <a target="_blank" href="https://github.com/vijay-dev-x">
            <FaGithub></FaGithub>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/vijay-dev-x/">
            <FaLinkedin></FaLinkedin>
          </a>
          <a target="_blank" href="mailto:vm2218943@gmail.com">
            <SiGmail></SiGmail>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
