import React from "react";
import "./Project.css";
import Footer from "./Footer";
import Card from "@mui/joy/Card";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import { useState, useEffect } from "react";
const projects = [
  {
    id: 1,
    title: "Book my show",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/6/GH/DI/EZ/69487233/bookmyshow.png",
    descryption:
      " Its a  ticket booking app where i use react , reactstrap for frontend purpose",
    link: "streampage-qp8r2jfhu-alokcseit.vercel.app",
  },
  {
    id: 2,
    title: "NATGEO kids magazine",
    image:
      "https://i.natgeofe.com/k/d0b3ae30-1cb2-4f9e-92d5-79b97e75d0e1/MAR-23-NGK-Cover-FB.jpg",
    descryption:
      " in this project i use mainly reactjs  for frontend  ,for styling i use bootstrap and reactstrap",
    link: "https://imaginative-profiterole-ad771c.netlify.app",
  },
  {
    id: 3,
    title: "TEXT to IMAGE",
    image:
      "https://images.newscientist.com/wp-content/uploads/2022/05/26114929/SEI_106436363.jpg",
    descryption:
      " Its  an AI application where you can get the image from the  text , in this project i use reactjs for frontend and  node nad express for backend  and for database purpose i used mongodb atlas",
    link: "https://imagegenerator-openai.netlify.app",
  },
];
var n = projects.length;
function Project() {
  console.log(" length is ", n);
  const [projectc, setprojectc] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setprojectc((projectc + 1) % n);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [projectc]);

  return (
    <>
      <div className="project_main"></div>
      <div className="project_animation">
        <div id="container33">
          Make
          <div id="flip">
            <div className="a">
              <div className="b">wOrK</div>
            </div>
            <div className="a">
              <div className="b">lifeStyle</div>
            </div>
            <div className="a">
              <div className="b">Everything</div>
            </div>
          </div>
          AweSoMe!
        </div>
      </div>
      <div className="nocontent">
        <div className="cards">
          <Card sx={{ width: 320 }}>
            <div>
              <Typography level="title-lg">
                {projects[projectc].title}
              </Typography>

              <IconButton
                aria-label="bookmark Bahamas Islands"
                variant="plain"
                color="neutral"
                size="sm"
                sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
              >
                <BookmarkAdd />
              </IconButton>
            </div>
            <AspectRatio minHeight="120px" maxHeight="200px">
              <img src={projects[projectc].image} loading="lazy" alt="" />
            </AspectRatio>
            <CardContent orientation="horizontal">
              <a href={projects[projectc].link}>
                <Button
                  variant="solid"
                  size="md"
                  color="primary"
                  aria-label="Explore Bahamas Islands"
                  sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
                >
                  Visit site
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
        <div className="aboutproject">
          <div className="title">{projects[projectc].title}</div>
          <br />
          <div className="description">{projects[projectc].descryption}</div>
        </div>
      </div>
      <br />
      <br />
      <Footer></Footer>
    </>
  );
}

export default Project;
