import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Panda VPN clone",
    img: "/portfolio1.webp",
    desc: "The creation of a Panda VPN clone using React involved meticulous design and development efforts, ensuring seamless functionality and user experience. Implementing mobile responsiveness was a crucial aspect, guaranteeing optimal performance across devices. Through innovative design choices and diligent coding practices, the project delivers a reliable and user-friendly VPN solution.",
  },
  {
    id: 2,
    title: "Social Site",
    img: "https://codecanyon.img.customer.envatousercontent.com/files/387482830/inline.jpeg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=438a989f36123431f62793af286330fc",
    desc: "Developing a social site clone with React required comprehensive planning and execution, focusing on replicating key features and user interactions of popular social platforms. Incorporating mobile responsiveness was essential, ensuring accessibility across devices. Meticulous attention to detail in design and functionality resulted in a seamless and engaging user experience reminiscent of leading social networks.",
  },
  {
    id: 3,
    title: "Interactive 3D glass weather",
    img: "https://shop.loxone.com/media/catalog/product/cache/10/image/600x400/9df78eab33525d08d6e5fb8d27136e95/1/0/100026_weather-services_1.png",
    desc: "Creating a social site clone with React involved meticulous design and development, mirroring essential features and user interactions of prominent social platforms. Emphasis was placed on mobile responsiveness, guaranteeing accessibility across devices. Through comprehensive planning and attention to detail in design and functionality, the project delivers a captivating and intuitive user experience akin to leading social networks.",
  },
  {
    id: 4,
    title: "Netflix Clone",
    img: "https://i.ytimg.com/vi/Tgat3-prVv4/maxresdefault.jpg",
    desc: "Crafting a Netflix clone with HTML and CSS necessitated intricate design and implementation, replicating the iconic layout and functionalities of the streaming giant. Prioritizing responsiveness, the site seamlessly adapts to various screen sizes. Through meticulous styling and structure, the project delivers an immersive user experience reminiscent of the original platform.",
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
            <button>See Demo</button>
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
