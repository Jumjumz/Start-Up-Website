import "./App.css";
import NavBar from "./components/NavBar/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/home";
import About from "./components/Pages/About/about";
import Contact from "./components/Pages/Contact/contact";
import { MoveUp, MoveDown } from "./components/Reveal/reveal";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/about"
          element={
            <MoveUp>
              <About />
            </MoveUp>
          }
        ></Route>
        <Route
          path="/contact"
          element={
            <MoveDown>
              <Contact />
            </MoveDown>
          }
        ></Route>
      </Routes>
    </>
  );
}
export default App;
