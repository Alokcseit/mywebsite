import "./Aboutme.css";
import { NavLink } from "react-router-dom";
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const skills = [
  { name: "Reactjs", abbreviation: 80 },
  { name: "Nodejs", abbreviation: 50 },
  { name: "Expressjs", abbreviation: 50 },
  { name: "Javascript", abbreviation: 70 },
  { name: "MongoDB", abbreviation: 80 },
  { name: "C++", abbreviation: 70 },
  { name: "C", abbreviation: 90 },
  { name: "Python", abbreviation: 80 },
  { name: "Html5", abbreviation: 80 },
  { name: "Css3", abbreviation: 70 },
  { name: "Docker", abbreviation: 30 },
  { name: "reactStrap", abbreviation: 90 },
  { name: "R.spring", abbreviation: 50 },
  { name: "materialui", abbreviation: 70 },
  { name: "Redux", abbreviation: 80 },
  { name: "Rest API ", abbreviation: 75 },
  { name: "GitHub", abbreviation: 80 },
  { name: "Agile", abbreviation: 30 },
  { name: "mySql", abbreviation: 80 },
  { name: "sqlServer", abbreviation: 80 },
];
const dataset = skills.map((skill) => ({
  skills: skill.name,
  value: skill.abbreviation,
}));
function Aboutme() {
  return (
    <>
      <div className="maincontainer">
        <div className="subcontainer">
          <h2 className="heading_main">ABOUT ME</h2>
          <p className="Paragraph">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>
        <div className="divider">
          <div className="about_me">
            <h2>Get to know me!</h2>
            <p>
              I'm a Frontend Web Developer building the Front-end of Websites
              and Web Applications that leads to the success of the overall
              product. Check out some of my work in the Projects section.
            </p>
            <p>
              I also like sharing content related to the stuff that I have
              learned over the years in Web Development so it can help other
              people of the Dev Community. Feel free to Connect or Follow me on
              my Linkedin where I post useful content related to Web Development
              and Programming
            </p>
            <p>
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </p>
            <NavLink
              to="contact"
              style={{
                color: "#ffff",
                backgroundColor: "rgb(6, 2, 32)",
                textDecoration: "none",
                border: "1px solid black",
                paddingLeft: "5px",
                paddingRight: "5px",
                paddingBottom: "5px",
                borderRadius: "5px",
              }}
            >
              Contact me
            </NavLink>
          </div>
          <div className="skil">
            <h2 className="header_skill">SKILLS </h2>
            <div className="separator">
              {skills.map((item, index) => (
                <div className="sk" key={index}>
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="chart">
        <BarChart
          dataset={dataset}
          xAxis={[
            { scaleType: "band", dataKey: "skills", orientation: "vertical" },
          ]} // Set the orientation to vertical
          series={[{ dataKey: "value", label: "Skill Level" }]}
          layout="vertical" // Set the layout to vertical
          width={1450}
          height={400}
        />
      </div>
    </>
  );
}

export default Aboutme;
