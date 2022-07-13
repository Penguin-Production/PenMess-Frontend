import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from '../components/Sidebar'
import MessageForm from '../components/MessageForm'
import Cookies from "universal-cookie";
import './MessageForm.css'
const cookies = new Cookies();
function Chat() {
  // let token = new URLSearchParams(window.location.search).get("token");
  // cookies.set("token", token, { path: "/" , });
  return <Container>
    <Row>
      <Col md={4}>
      <Sidebar/>
      </Col>
      <Col md={8} className="messages-output d-flex align-items-end">
      <MessageForm/>
      </Col>
    </Row>
  </Container>;
}

export default Chat;
