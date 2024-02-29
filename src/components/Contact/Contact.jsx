import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
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
          <h2>Mail</h2>
          <p>vm2218943@gmail.com</p>
        </motion.div>
        <motion.div variants={variants}>
          <h2>Address</h2>
          <p>Jharkhand,India</p>
        </motion.div>
        <motion.div variants={variants}>
          <h2>Linkdin</h2>
          <p>@vijay.dev.x</p>
        </motion.div>
      </div>
      <div className="formContact">
        <motion.div
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ duration: 3 }}
          className="svg"
        >
          {/* <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              <motion.path
                strokeWidth={0.2}
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 3 }}
                d="M19 21V15M19 15L17 17M19 15L21 17M21 11V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.0799 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.0799 19 6.2 19H13M20.6067 8.26229L15.5499 11.6335C14.2669 12.4888 13.6254 12.9165 12.932 13.0827C12.3192 13.2295 11.6804 13.2295 11.0677 13.0827C10.3743 12.9165 9.73279 12.4888 8.44975 11.6335L3.14746 8.09863"
                stroke="#e18114"
                stroke-width="0.4800000000000001"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg> */}
        </motion.div>
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

          <button>
            Submit{" "}
            <span>
              {error && "Error"}
              {success && ": Success"}{" "}
            </span>
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
}

export default Contact;
