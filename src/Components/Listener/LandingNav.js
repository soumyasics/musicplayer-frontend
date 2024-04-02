import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../Assest/Logo (1).png";
import "./landingnav.css";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function LandingNav({ props }) {
  // const [beforelogin,setBeforelogin]=useState()
  // const [afterlogin,setAfterlogin]=useState()

  // let beforeLogin = [
  //   { content: "Home", path: "./HomePage.js" },
  //   {
  //     content: "Login",
  //     path: "./ListenerLogin.js",
  //   },
  //   { content: "register", path: "./ListenerRegister.js" },
  // ];
  // let afterLogin =

  // let data = props.isRegisterdUser ? afterLogin : beforeLogin;

  // console.log(data);

  let data;

  switch (props.value) {
    case "listenerlanding":
      data = [
        { content: "Home", path: "/" },
        {
          content: "Login",
          path: "/ListenerLogin",
        },
        { content: "Register", path: "/ListenerRegister" },
      ];
      break;
    case "creatorlanding":
      data = [
        { content: "Home", path: "/" },
        { content: "Login", path: "/creatorlogin" },
        { content: "Register", path: "/creatorregister" },
      ];
      break;
    default:
      data = [];
  }

  return (
    <div>
      <Navbar>
        <Container>
          <Link to="/">
            <img className="footerimg" src={logo} alt="img"></img>
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {data.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="landingpage_links text-decoration-none me-5"
                id="landingpage_links_hover"
              >
                {item.content}
              </Link>
            ))}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default LandingNav;
