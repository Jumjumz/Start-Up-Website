import "./clients.css";
import { getClientpic } from "../Images/clientpic";
import { getImageURL } from "../Utils/utils";

export default function clients() {
  const getImg = getClientpic();
  return (
    <>
      <section className="cln-sec">
        <div className="cln-cont">
          <h1 className="cln-head">Client Testimonies</h1>
          <div className="cln-info">
            {getImg.map((getImg) => (
              <div
                className="cln-card"
                key={getImg.id}
                style={{ backgroundColor: getImg.color }}
              >
                <img
                  className="crd-img"
                  src={getImageURL(getImg.cover)}
                  alt={getImg.title}
                  loading="lazy"
                />
                <h1 className="crd-name">{getImg.name}</h1>
                <p className="crd-tst">{getImg.message}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
