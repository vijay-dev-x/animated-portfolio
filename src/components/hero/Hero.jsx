import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";

const textVarient = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const scrollVarient = {
  initial: {
    y: 0,
    opacity: 0,
  },
  animate: {
    y: 30,
    opacity: 1,
    transition: {
      repeat: Infinity,
      duration: 2,
    },
  },
};
const sliddingText = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-500px",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 30,
    },
  },
};

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-wrapper ">
        <motion.div
          variants={textVarient}
          initial="initial"
          animate="animate"
          // transition="transition"
          className="text-container"
        >
          <motion.h2 variants={textVarient}>Vijay kumar</motion.h2>
          <motion.h1 variants={textVarient}>Full stack web devloper</motion.h1>
          <motion.div variants={textVarient} className="button-div">
            <button>button1</button>
            <button>button2</button>
          </motion.div>
          <motion.div
            variants={scrollVarient}
            initial="initial"
            animate="animate"
            className="scroll"
          >
            <img src="/public/scroll.png" alt="" />
          </motion.div>
        </motion.div>
        <motion.div
          variants={sliddingText}
          animate="animate"
          initial="initial"
          className="sliding-text"
        >
          <h1>Yes ipsum dolor sit amet.</h1>
        </motion.div>

        <div className="image-container">
          <img src="/public/hero.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
