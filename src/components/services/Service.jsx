import React, { useRef } from "react";
import "./service.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: -100,
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
export default function Service() {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-600px" });

  return (
    <motion.div
      className="service"
      ref={ref}
      // variants={variants}
      initial="initial"
      //   animate={"animate"}
      // whileInView="animate"
    >
      <div className="very-top-service">
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </div>
      <div className="container">
        <motion.div className="top-service">
          <div className="top1">
            <img src="../../../public/people.webp" alt="" />
            <h2>
              <motion.b whileHover={{ color: "orange" }}> Uniqu</motion.b>
              <span> ideas</span>
            </h2>
          </div>
          <div className="top2">
            <h2>
              <motion.b whileHover={{ color: "orange" }}> Uniqu </motion.b>
              <span> bussiness</span>
            </h2>
            <button>What we Do ?</button>
          </div>
        </motion.div>

        <motion.div className="bottom-service">
          <motion.div>
            <h2>lorem</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit recusandae iure eligendi, corrupti, laborum alias
              quod possimus explicabo rerum pariatur repellendus ullam?
            </p>
            <button>Go</button>
          </motion.div>
          <motion.div>
            <h2>lorem</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit recusandae iure eligendi, corrupti, laborum alias
              quod possimus explicabo rerum pariatur repellendus ullam?
            </p>
            <button>Go</button>
          </motion.div>
          <motion.div>
            <h2>lorem</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit recusandae iure eligendi, corrupti, laborum alias
              quod possimus explicabo rerum pariatur repellendus ullam?
            </p>
            <button>Go</button>
          </motion.div>
          <motion.div>
            <h2>lorem</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit recusandae iure eligendi, corrupti, laborum alias
              quod possimus explicabo rerum pariatur repellendus ullam?
            </p>
            <button>Go</button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
