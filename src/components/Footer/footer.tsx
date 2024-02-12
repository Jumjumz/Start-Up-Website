import "./footer.css";

function footer() {
  return (
    <section className="f-sec">
      <div className="f-cont">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redhat/redhat-plain-wordmark.svg" />
        <div className="footer-div">
          <h1>NAVIGATION</h1>
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT</a>
        </div>
        <div className="legal-div">
          <h1>LEGAL</h1>
          <p>TERMS</p>
          <p>PRIVACY</p>
          <p>COPYRIGHT</p>
        </div>
        <div className="contact-div">
          <h1>CONTACT</h1>
          <p>+1 012 345 768</p>
          <p>(555) 555-5555</p>
          <p>startup@startup.com</p>
        </div>
      </div>
    </section>
  );
}

export default footer;
