import React, { useRef } from "react";
import "./parellax.scss";
import { motion, useTransform, useScroll } from "framer-motion";

function Parellax({ type }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
  const yStar = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const ySun = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div
      ref={ref}
      className="parellax"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What I do ?" : "What I did"}
      </motion.h1>
      <div className="mountains"></div>
      <motion.div style={{ y: ySun }} className="planets"></motion.div>
      <motion.div style={{ x: yStar }} className="stars"></motion.div>
    </div>
  );
}

export default Parellax;
