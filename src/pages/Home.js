import React, { useEffect } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";

import Cookies from "universal-cookie";

const cookies = new Cookies();

function Home() {
  let token = new URLSearchParams(window.location.search).get("token");
  if(token){cookies.set("token", token, { path: "/" });}
  
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
            {token && <a href="/chat">
              <Button variant="success">Getting Started</Button>
            </a> }
            {!token && <a href="http://localhost:3000/auth/google">
              <Button variant="success">Login With Google</Button>
            </a>}
            
          </div>
        </Col>
        <Col md={6} className="home_bg"></Col>
      </Row>
    </Container>
  );
}

export default Home;
