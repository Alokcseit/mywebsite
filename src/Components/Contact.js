import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./Contact.css";
import Footer from "./Footer";
function Contact() {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handlechange(event) {
    const { name, value } = event.target;
    setformdata({ ...formdata, [name]: value });
  }

  return (
    <div id="contact">
      <div className="fakecontainer"></div>
      <div className="map">
        <iframe
          title=" my home"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8100.623396059896!2d78.43418770628853!3d17.448305215897296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1698218132217!5m2!1sen!2sin"
          style={{
            width: "98%",
            height: "450px",
            border: "2px solid black",
            padding: "10px",
            allowFullScreen: true, // Use "allowFullScreen" instead of "allowfullscreen"
            loading: "lazy",
            referrerPolicy: "no-referrer-when-downgrade",
            alignItems: "center",
          }}
        ></iframe>
      </div>
      <br />
      <br />
      <div className="c_form">
        <div className="c_formvalue">
          <form action="https://formspree.io/f/mdorblwj" method="POST">
            <Stack gap="30px">
              <TextField
                required
                id="outlined-basic"
                fullWidth
                label="Name"
                variant="outlined"
                type="text"
                name="name"
                value={formdata.name}
                onChange={handlechange}
              />

              <TextField
                required
                id="outlined-basic"
                fullWidth
                typeof="email"
                label="Email"
                variant="outlined"
                type="text"
                name="email"
                value={formdata.email}
                onChange={handlechange}
              />

              <TextField
                id="outlined-basic"
                required
                label="Message"
                variant="outlined"
                type="text"
                name="message"
                value={formdata.message}
                onChange={handlechange}
                multiline
                rows={4}
              />
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Stack>
          </form>
        </div>
      </div>
      <br />
      <br />
      <Footer></Footer>
    </div>
  );
}

export default Contact;
