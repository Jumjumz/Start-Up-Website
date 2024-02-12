import "./login.css";
import { motion, AnimatePresence } from "framer-motion";
import { FC } from "react";
import Goog from "../../assets/complogo/GOOG.svg";
import FcBkk from "../../assets/complogo/FB.svg";

interface Props {
  logOpen: boolean;
  setLogOpen: (state: boolean) => void;
}

const modal = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
    },
  },
};

const LogIn: FC<Props> = ({ logOpen, setLogOpen }) => {
  return (
    <AnimatePresence>
      {logOpen && (
        <>
          <motion.div
            className="login-bck-drp"
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="login-div"
              onClick={(e) => e.stopPropagation()}
            >
              <form>
                <h1>Log In</h1>
                <input placeholder="Username or Email"></input>
                <input placeholder="Password" type="password"></input>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  className="frm-btn"
                >
                  Log In
                </motion.button>
                <p>OR</p>
                <h2>Log in with</h2>
                <div className="login-logo">
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    src={FcBkk}
                  />
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    src={Goog}
                  />
                </div>
              </form>
              <div className="btn-log">
                <motion.button
                  className="cls-btn"
                  onClick={() => setLogOpen(false)}
                  whileHover={{ rotate: 90, scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  X
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LogIn;
