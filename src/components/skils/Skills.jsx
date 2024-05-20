import React from "react";
import "./skills.scss";
import { motion } from "framer-motion";

export default function Skills() {
  const variants = {
    initial: {
      x: -400,
      y: -50,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView={"animate"}
      className="skills"
    >
      <h2>Skills i have</h2>

      <div className="skills-container">
        <ul>
          <motion.li variants={variants} className="html">
            HTML
          </motion.li>
          <motion.li variants={variants} className="css">
            CSS
          </motion.li>
          <motion.li variants={variants} className="js">
            JavaScript
          </motion.li>
          <motion.li variants={variants} className="react">
            REACT
          </motion.li>
          <motion.li variants={variants} className="ng">
            Node JS
          </motion.li>
          <motion.li variants={variants} className="express">
            Express JS
          </motion.li>
          <motion.li variants={variants} className="mdb">
            Mongo DB
          </motion.li>
        </ul>
        <div className="teco">
          <motion.img src="/skiils1.png" alt="" />
          <motion.img src="/skills2.png" alt="" />
          <motion.img src="/skills3.png" alt="" />
          <img src="/skills4.png" alt="" />
          <img src="/skills5.png" alt="" />
          <img src="/skills6.png" alt="" />
          <img src="/skills8.png" alt="" />
          <img src="/shadcn.png" alt="" />
          <img src="/typescript.png" alt="" />

          <img src="/skills9.png" alt="" />
          <img src="/skills10.png" alt="" />
          <img src="/skills11.png" alt="" />
          <img src="/skills12.png" alt="" />
          <img src="/skills13.png" alt="" />
          <img src="/firebase.png" alt="" />
          <img src="/stripe.png" alt="" />
          <img src="/maria-db.png" alt="" />
          <img src="/skills14.png" alt="" />
          <img src="/skills15.png" alt="" />
        </div>
      </div>
    </motion.div>
  );
}
