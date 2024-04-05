import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../Assest/Logo (1).png";
import "./listenernav.css";
import Nav from "react-bootstrap/Nav";
import axiosInstance from "../../Baseurl";
import { Link } from "react-router-dom";

function ListenerNav({ url }) {
  const [listenernav, setListenernav] = useState("");
  useEffect(() => {
    axiosInstance
      .post("/viewListenerById", { id: localStorage.getItem("listenerid") })
      .then((response) => {
        if (
          response.data.data &&
          response.data.data.image
        ) {
          console.log(response.data.data.image.filename);
          setListenernav(response.data.data.image.filename);
        }
        console.log(listenernav, "mm");
      });
  },[]);
  
  return (
    <div>
      <Navbar>
        <Container>
          <Link to="/listenerhome">
            <img className="footerimg" src={logo} alt="img"></img>
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Link
              to="/listenerhome"
              className="landingpage_links text-decoration-none me-5"
              id="landingpage_links_hover"
            >
              Home
            </Link>
            <Link
              to="/listenerviewmusic"
              className="landingpage_links text-decoration-none me-5"
              id="landingpage_links_hover"
            >
              musics
            </Link>
            <Link
              to="/listenersubscription"
              className="landingpage_links text-decoration-none me-5"
              id="landingpage_links_hover"
            >
              Subscription
            </Link>
            <Link
              to="/listenerWhishlist"
              className="landingpage_links text-decoration-none me-5"
              id="landingpage_links_hover"
            >
              wishlist
            </Link>
            <Link class="nav-link text-decoration-none" to="/listenerProfile">
              <div className="circular-img">
                <img
                  src={url + listenernav}
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

export default ListenerNav;
// src={`${url}/${data.image.filename}`}
