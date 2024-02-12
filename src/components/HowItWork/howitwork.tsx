import "./howitwork.css";
import { getHwItWrk } from "../Utils/utils";
import { getHwitInfo } from "./import";

function howitwork() {
  const getInfo = getHwitInfo();
  return (
    <>
      <section className="hw-sec">
        <div className="hw-cont">
          <h1 className="hw-it-wrk">HOW IT WORKS</h1>
          {getInfo.map((getInfo) => (
            <div className="hw-it-info" key={getInfo.id}>
              <img
                loading="lazy"
                src={getHwItWrk(getInfo.cover)}
                alt={getInfo.title}
              />
              <h1>{getInfo.header}</h1>
              <p>{getInfo.message}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default howitwork;
