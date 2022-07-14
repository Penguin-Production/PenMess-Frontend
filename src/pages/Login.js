import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Login.css";
function Login() {
  return (
    <Container>
      <Row>
        <Col md={5} className="login_bg"></Col>
        <Col
          md={7}
          className="d-flex align-items-center justify-content-center flex-direction-column"
        >
          <a href="http://localhost:5000/auth/google">
            <Button variant="primary">Login with Google</Button>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
