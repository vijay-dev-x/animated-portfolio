import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Panda VPN UI clone",
    img: "/portfolio1.webp",
    link: "https://panda-vpn.netlify.app/",
    desc: "The creation of a Panda VPN clone using React involved meticulous design and development efforts, ensuring seamless functionality and user experience. Implementing mobile responsiveness was a crucial aspect, guaranteeing optimal performance across devices. Through innovative design choices and diligent coding practices, the project delivers a reliable and user-friendly VPN solution.",
  },
  {
    id: 2,
    title: "Twitter clone",
    link: "https://twitter-devx.netlify.app",
    img: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/12/x-twitter-down-in-india-1703138444.jpg",
    desc: "Designed and implemented conditional rendering of components to restrict access to certain routes and functionalities, prompting users to log in before accessing protected resources",
  },
  {
    id: 3,
    title: "DevX AI",
    link: "https://gimni-devx.netlify.app",
    img: "https://projectwale.com/wp-content/uploads/2020/05/artificial-intelligence.jpg",
    desc: "Integrated Google's Gemini API into the DexX AI application to leverage powerful AI capabilities for text generation, expanding the application's functionality and enhancing user experience.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>
              <a href={item.link}>Open Project</a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 10,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>MY Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
