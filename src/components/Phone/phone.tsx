import "./phone.css";
import Phonepic from "../../assets/landingpage/phone-01.svg";

function phone() {
  return (
    <section className="ph-sec">
      <img src={Phonepic} loading="lazy" />
      <div className="ph-cont">
        <h1>Create a Mobile App</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
          accumsan justo. Etiam consequat commodo justo non imperdiet. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Sed mauris elit, euismod vitae enim rutrum,
          venenatis aliquam dui. Etiam at dictum ante. Vestibulum consequat
          pretium justo non ultricies. Nullam vel nulla laoreet, semper nisi
          non, mattis justo. Nunc sagittis diam ac tellus tincidunt molestie.
          Mauris elementum dictum orci, vel pulvinar mi vulputate at. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a accumsan
          justo. Etiam consequat commodo justo non imperdiet. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos.
        </p>
      </div>
    </section>
  );
}

export default phone;
