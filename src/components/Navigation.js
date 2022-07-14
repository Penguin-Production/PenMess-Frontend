import React from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import logo from "../assets/logo.png";
const axios = require("axios");

const cookies = new Cookies();
function Navigation() {
  let token = new URLSearchParams(window.location.search).get("token");
  let navigate = useNavigate();
  function logoutUser() {
    axios
      .delete("http://localhost:3000/logout", {
        data: {
          token: token,
        },
      })
      .then(() => {
        cookies.remove("token", {
          path: "/",
        });
        navigate("/");
        console.log("Successful");
      })
      .catch((e) => console.log(e));
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <img src={logo} style={{ width: 50, height: 50 }} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {token && (
              <Button variant="danger" onClick={logoutUser}>
                Logout
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
