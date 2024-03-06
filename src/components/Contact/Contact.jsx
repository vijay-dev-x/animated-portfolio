import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { BiLogoGmail } from "react-icons/bi";
import { CiLinkedin } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

const variants = {
  initial: {
    opacity: 0,
    y: 600,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
function Contact() {
  const form = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_48ai4ab", "template_lo02qbh", form.current, {
        publicKey: "UveIis9OMRJLAl_Ey",
      })
      .then(
        (result) => {
          setSuccess(true);
          console.log(result);
        },
        (error) => {
          setError(true);
        }
      );
  };

  const ref = useRef();
  const isInView = useInView(ref, { margin: "0px" });

  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      className="contact"
    >
      <div className="textContact" ref={ref}>
        <div>
          <motion.h1 variants={variants}>
            Let,s work <br /> together
          </motion.h1>
        </div>
        <motion.div variants={variants}>
          <h2>
            <span>
              <BiLogoGmail></BiLogoGmail>
            </span>
            Mail
          </h2>
          <p>vm2218943@gmail.com </p>
        </motion.div>
        <motion.div variants={variants}>
          <h2>
            <span>
              <IoLocationOutline></IoLocationOutline>
            </span>
            Address
          </h2>
          <p>Jharkhand,India</p>
        </motion.div>
        <motion.div variants={variants}>
          <h2>
            <span>
              <CiLinkedin></CiLinkedin>
            </span>{" "}
            Linkdin
          </h2>
          <p>@vijay.dev.x</p>
        </motion.div>
        <motion.div variants={variants}>
          <p className="join">
            Join me in web development to create impactful projects. Let's
            innovate and succeed together!
          </p>
          <h3>
            <span>
              {error && "Error"}
              {success && ": Success"}
            </span>
          </h3>
        </motion.div>
      </div>
      <div className="formContact">
        <motion.div
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ duration: 3 }}
          className="svg"
        ></motion.div>
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0, duration: 1 }}
        >
          <input placeholder="Name" type="text" name="name" />

          <input placeholder="Email" type="email" name="email" />

          <textarea rows={8} placeholder="Message" name="message" />

          <button>Submit</button>
        </motion.form>
      </div>
    </motion.div>
  );
}

export default Contact;
