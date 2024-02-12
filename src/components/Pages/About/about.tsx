import "./about.css";
import Footer from "../../Footer/footer";
import Codelink from "../../Codelink/codelink";
import { getEmployee } from "../../Utils/utils";
import { getEmployeeData } from "./import";

export default function about() {
  const employees = getEmployeeData();
  return (
    <>
      <section className="abt-sec">
        <div className="about-us">
          <h1 className="abt-h">ABOUT US!</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus natus totam architecto suscipit inventore, quisquam
            tempora aliquid quo aperiam. Alias ab cum perspiciatis suscipit
            maiores fuga illo ullam laboriosam rerum? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Adipisci necessitatibus enim nulla
            deserunt voluptatum voluptas natus minima quos odit soluta iure ad,
            ut sunt incidunt hic voluptatibus reprehenderit. Fugiat, explicabo.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus natus totam architecto suscipit inventore, quisquam
            tempora aliquid quo aperiam. Alias ab cum perspiciatis suscipit
            maiores fuga illo ullam laboriosam rerum? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Adipisci necessitatibus enim nulla
            deserunt voluptatum voluptas natus minima quos odit soluta iure ad,
            ut sunt incidunt hic voluptatibus reprehenderit.
          </p>
          <h1 className="mt-tm">MEET THE TEAM</h1>
          <div className="emp-cont">
            {employees.map((employees) => (
              <div className="card-emp" key={employees.id}>
                <img
                  src={getEmployee(employees.cover)}
                  loading="lazy"
                  alt={employees.title}
                />
                <h1>{employees.name}</h1>
                <h2>{employees.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <Codelink />
    </>
  );
}
