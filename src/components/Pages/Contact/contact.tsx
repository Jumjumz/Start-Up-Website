import "./contact.css";
import Footer from "../../Footer/footer";
import Codelink from "../../Codelink/codelink";
import { motion } from "framer-motion";

export default function contact() {
  return (
    <>
      <section className="cont-sec">
        <div className="con-cont">
          <div className="em-cont">
            <h1>Email Us</h1>
            <form id="em">
              <input
                id="eml"
                className="frm-em"
                placeholder="Email Address"
              ></input>
              <input id="sbj" className="frm-sbj" placeholder="Subject"></input>
              <textarea className="frm-msg" placeholder="Message"></textarea>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className="btn-em"
              >
                SUBMIT
              </motion.button>
            </form>
          </div>
          <div className="nm-cont">
            <h1 className="gv-cl">Give Us a Call</h1>
            <h1 className="phn-nm">+1 012 345 758</h1>
            <h1 className="tel-nm">(555) 555-5555</h1>
          </div>
          <div className="ms-cont">
            <h1>Connect with Us</h1>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-plain.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" />
          </div>
        </div>
      </section>
      <Footer />
      <Codelink />
    </>
  );
}
