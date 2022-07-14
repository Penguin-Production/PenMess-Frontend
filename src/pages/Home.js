import React, { useEffect, useState } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";

import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import { get } from "./../utils/api-helper/apiCaller";
import usePersistedState from "./../utils/LocalStorageUtils/useLocalstrorage";

const cookies = new Cookies();

function Home() {
  // let token = new URLSearchParams(window.location.search).get("token");
  // if(token){cookies.set("token", token, { path: "/" });}
  const [user, setUser] = usePersistedState("user");

  return (
    <Container>
      <Row>
        <Col
          md={6}
          className="d-flex flex-direction-column align-items-center justify-content-center"
        >
          <div>
            <h1>Share the world with your friends</h1>
            <p>Chat App lets you connect with the world</p>
            {true && (
              <a href="/chat">
                <Button variant="success">Getting Started</Button>
              </a>
            )}
            {true && (
              <Link to="/login">
                <Button variant="success">Login With Google</Button>
              </Link>
            )}
          </div>
        </Col>
        <Col md={6} className="home_bg"></Col>
      </Row>
    </Container>
  );
}

export default Home;
