import "./navbar.css";
import { Link } from "react-router-dom";
import SignUp from "../Popup/signup";
import LogIn from "../Popup/login";
import { motion } from "framer-motion";
import Hamb from "../../assets/landingpage/hamburder.svg";
import { useState } from "react";

function navBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [logOpen, setLogOpen] = useState(false);
  const [hambOpen, setHambOpen] = useState(false);
  return (
    <>
      <nav className="nav-bar">
        <div className="comp-logo">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redhat/redhat-plain-wordmark.svg" />
        </div>
        <motion.div
          whileHover={{ rotate: 90 }}
          whileTap={{ rotate: 0 }}
          onClick={() => {
            setHambOpen(!hambOpen);
          }}
          className="hamb-icon"
        >
          <img src={Hamb} />
        </motion.div>
        <div className={hambOpen ? "open-sel" : "sel-btn"}>
          <Link to="/home">
            <button className="hme-btn">HOME</button>
          </Link>
          <Link to="/about">
            <button className="abt-btn">ABOUT</button>
          </Link>
          <Link to="/contact">
            <button className="cnt-btn">CONTACT</button>
          </Link>
        </div>
        <div className={hambOpen ? "open-reg" : "reg-btn"}>
          <motion.button
            className="btn-styl sign-up"
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            SIGN UP
          </motion.button>
          <motion.button
            className="btn-styl log-in"
            onClick={() => setLogOpen(true)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            LOG IN
          </motion.button>
        </div>
        <SignUp isOpen={isOpen} setIsOpen={setIsOpen} />
        <LogIn logOpen={logOpen} setLogOpen={setLogOpen} />
      </nav>
    </>
  );
}

export default navBar;
