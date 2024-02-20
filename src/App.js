import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Cntent from "./Components/Cntent";
import Project from "./Components/Project";
import Contact from "./Components/Contact";

function App() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  return (
    <div>
      <Router>
        <Header></Header>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Cntent></Cntent>
              </>
            }
          ></Route>
          <Route path="/project" element={<Project></Project>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
