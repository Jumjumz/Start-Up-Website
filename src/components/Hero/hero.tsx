import "./hero.css";
import HeroPic from "../../assets/landingpage/hero-pic.svg";
import { motion } from "framer-motion";

function hero() {
  return (
    <>
      <section className="h-section">
        <motion.div className="hero-container">
          <motion.h1
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            exit={{ x: -50 }}
            transition={{ delay: 1 }}
            className="h-cont"
          >
            START YOUR <br />
            BUSINESS NOW!
          </motion.h1>
          <motion.p
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            exit={{ y: -50 }}
            transition={{ delay: 1.4 }}
            className="p-cont"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
            accumsan justo. Etiam consequat commodo justo non imperdiet. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Sed mauris elit, euismod vitae enim rutrum,
            venenatis aliquam dui.
          </motion.p>
          <motion.img
            src={HeroPic}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1.7 }}
            className="i-cont"
          ></motion.img>
          <div className="lrn-btn">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              LEARN MORE
            </motion.button>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default hero;
