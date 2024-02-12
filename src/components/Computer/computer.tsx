import "./computer.css";
import Compic from "../../assets/landingpage/monitor-01.svg";

function computer() {
  return (
    <section className="comp-sec">
      <div className="comp-cont">
        <h1>
          Connect to <br />
          the World!
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
          accumsan justo. Etiam consequat commodo justo non imperdiet. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.Sed mauris elit, euismod vitae enim rutrum,
          venenatis aliquam dui. Etiam at dictum ante. Vestibulum consequat
          pretium justo non ultricies. Nullam vel nulla laoreet, semper nisi
          non, mattis justo. Nunc sagittis diam ac tellus tincidunt molestie.
          Mauris elementum dictum orci, vel pulvinar mi vulputate at.
        </p>
        <img src={Compic} loading="lazy" />
      </div>
    </section>
  );
}

export default computer;
