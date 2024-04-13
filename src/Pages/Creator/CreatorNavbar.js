import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../Assest/Logo (1).png";
import "../../Components/Listener/listenernav.css";
import Nav from "react-bootstrap/Nav";
import axiosInstance from "../../Baseurl";
import ViewReview from "./ViewReview";
import { useNavigate,Link } from "react-router-dom";

function CreatorNavbar({url}) {

  const [creatornav, setCreatornav] = useState("");

  useEffect(() => {
    axiosInstance
      .post("/viewCreatorById", { id: localStorage.getItem("creatorid") })
      .then((response) => {
        if (
          response.data.data &&
          response.data.data.image
        ) {
          console.log(response.data.data.image.filename);
          setCreatornav(response.data.data.image.filename);
        }else{
          console.log(creatornav, "mm");
        }
      });
  },[]);

  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <img className="footerimg" src={logo} alt="img"></img>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Link
              to="/creatorhome"
              className="landingpage_links text-decoration-none me-5"
              id="landingpage_links_hover"
            >
              Home
            </Link>
            <Link
              to={`/subscription`}
              className="landingpage_links text-decoration-none me-5"
              id="landingpage_links_hover"
            >
              Subscribers
            </Link>
            <Link
              className="landingpage_links text-decoration-none me-5"
              id="landingpage_links_hover"
              to={`/viewreview/${creatorid}`}
            >
              Reviews
            </Link>

            <Link class="nav-link" to="/creatorprofile">
              <div className="circular-img">
                <img
                  src={url+creatornav}
                  alt="img"
                  className="profileimg"
                ></img>
              </div>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default CreatorNavbar;
// {`${url}/${data.image.filename}`}
