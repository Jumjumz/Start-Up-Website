import "./sponsors.css";
import Support from "../../assets/landingpage/supporters-01.svg";
import { getLogos } from "../Images/logos";
import { getLogoURL } from "../Utils/utils";
import { motion } from "framer-motion";

export default function sponsors() {
  const svgLogos = getLogos();
  return (
    <>
      <section className="spn-sec">
        <div className="spn-cont">
          <img className="sup-img" src={Support} loading="lazy" />
          <h1>Our Partners</h1>
          <motion.div
            className="logo-cont"
            viewport={{ once: true }}
            animate={{
              x: ["-180vh", "180vh"],
            }}
            transition={{
              x: {
                duration: 10,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              },
              delay: 0.25,
            }}
          >
            {svgLogos.map((svgLogos) => (
              <div className="logo-wrp" key={svgLogos.id}>
                <motion.img
                  className="spn-logo"
                  src={getLogoURL(svgLogos.cover)}
                  id={svgLogos.title}
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
