import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
function Footer() {
  return (
    <>
      <div className="ftr">
        <br />
        <br />
        <div className="footer_main">
          <div className="subfooter1">
            <div className="headd">ALOK KUMAR SWAIN</div>
            <br />
            <div className="paraa">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </div>
          </div>

          <div className="subfooter2">
            <div className="social">SOCIAL</div>
            <br />
            <div className="socialicon">
              <div className="iconsall">
                <FacebookIcon></FacebookIcon>
              </div>

              <div className="iconsall">
                <LinkedInIcon></LinkedInIcon>
              </div>
              <div className="iconsall">
                <GitHubIcon></GitHubIcon>
              </div>
              <div className="iconsall">
                <EmailIcon></EmailIcon>
              </div>
              <div className="iconsall">
                <WhatsAppIcon></WhatsAppIcon>
              </div>
            </div>
          </div>
        </div>
        <div style={{ color: "#ffff", marginLeft: "550px", marginTop: "50px" }}>
          © Copyright 2023. Made by  ALOK KUMAR SWAIN
        </div>
      </div>
    </>
  );
}

export default Footer;
