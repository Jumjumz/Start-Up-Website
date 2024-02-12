import "./signup.css";
import { motion, AnimatePresence } from "framer-motion";
import { FC } from "react";
import Goog from "../../assets/complogo/GOOG.svg";
import FcBkk from "../../assets/complogo/FB.svg";

interface Props {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
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

const SignUp: FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="sgn-bck-drp"
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div className="sgn-up" onClick={(e) => e.stopPropagation()}>
              <form>
                <h1>Sign Up</h1>
                <input placeholder="Firstname"></input>
                <input placeholder="Lastname"></input>
                <input placeholder="Email"></input>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  className="sgn-btn"
                >
                  Sign Up
                </motion.button>
                <p>OR</p>
                <h2 className="">Sign in with</h2>
                <div className="sgn-logo">
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
              <div className="btn-div">
                <motion.button
                  onClick={() => setIsOpen(false)}
                  whileHover={{ rotate: 90, scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="cls-btn"
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

export default SignUp;
