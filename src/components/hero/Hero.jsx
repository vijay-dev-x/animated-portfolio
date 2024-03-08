import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { GoLinkExternal } from "react-icons/go";

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
      <motion.div
        variants={sliddingText}
        animate="animate"
        initial="initial"
        className="sliding-text"
      >
        <h1>
          The web developer creates dynamic, user-friendly websites with
          advanced functionalities.
        </h1>
      </motion.div>
      <div className="hero-wrapper ">
        <motion.div
          variants={textVarient}
          initial="initial"
          animate="animate"
          // transition="transition"
          className="text-container"
        >
          <motion.h2 variants={textVarient}>Vijay&nbsp; kumar</motion.h2>
          <motion.h1 variants={textVarient}>
            I'm
            <span style={{ margin: "0px 10px" }}>
              <Typewriter
                words={[
                  "Frontend Developer",
                  "Backend Developer",
                  "UI/UX Developer",
                  "Full Stack Developer",
                ]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={60}
                deleteSpeed={60}
                delaySpeed={1000}
              />
            </span>
          </motion.h1>
          <motion.div variants={textVarient} className="button-div">
            {/* <button>Cartification</button>
            <button>button2</button> */}
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
          initial={{ y: "50px" }} // Initial scale of 1
          animate={{ y: "0px" }} // Animating the scale property from 1 to 1.2 back to 1
          transition={{
            duration: 6, // Duration of each scale animation
            repeat: Infinity, // Repeating the animation infinitely
            repeatType: "reverse", // Reversing the animation to create a bounce effect
          }}
          className="image-container"
        >
          <img src="/hero-face-3.png" alt="" />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
