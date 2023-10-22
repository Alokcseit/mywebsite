import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import "./Cntent.css";
import Aboutme from "./Aboutme";
import Footer from "./Footer";

export default function Cntent() {
  return (
    <>
      <div className="container1">
        <div className="subc1"></div>
        <div className="subc2">
          <div className="subc_left">
            <div className="icons">
              <FacebookIcon></FacebookIcon>
            </div>

            <div className="icons">
              <LinkedInIcon></LinkedInIcon>
            </div>
            <div className="icons">
              <GitHubIcon></GitHubIcon>
            </div>
            <div className="icons">
              <EmailIcon></EmailIcon>
            </div>
            <div className="icons">
              <WhatsAppIcon></WhatsAppIcon>
            </div>
          </div>
          <div className="subc_right">
            <div className="subc_right_content">
              <div class="container">
                <div class="box">
                  <div class="title">
                    <span class="block"></span>
                    <h1>
                      ALOK KUMAR SWAIN<span></span>
                    </h1>
                  </div>

                  <div class="role">
                    <div class="block"></div>
                    <p> A WEB DEVELOPER</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="descryption">
              <h2 class="animated-text">
                A Frontend focused Web Developer building the Frontend of
                Websites and Web Applications that leads to the success of the
                overall product
              </h2>
            </div>
          </div>
        </div>
      </div>
      <br />

      <Aboutme></Aboutme>
      <Footer></Footer>
    </>
  );
}
