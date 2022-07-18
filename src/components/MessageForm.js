import React, { useEffect } from "react";
import "../pages/MessageForm.css";

import { Form, Row, Col, Button, Container } from "react-bootstrap";
import messageApi from "./../utils/api-helper/messageApi";
import socket from "../utils/socket";
import ChatBox from "./ChatBox/ChatBox";
function MessageForm(props) {
  const { messages, conversation, currentMessage, setMessage } = props;
  function handleSubmit(e) {
    e.preventDefault();
  }
  // useEffect(() => {
  //   const getCurrentMessage = async () => {
  //     let currentMessage = await messageApi
  //       .get(conversation._id)
  //       .then((res) => {
  //         return res.data;
  //       });
  //     setMessage(currentMessage);
  //   };
  //   getCurrentMessage();
  //   socket.on("getMessage", (res) => {
  //     console.log(res);
  //   });
  // }, [currentMessage, conversations]);
  console.log(messages);
  return (
    <div className="messages-output d-flex flex-column w-100 pb-3 justify-content-end">
      <Container>
        {messages.map((message, index) => (
          <ChatBox key={index} message={message} />
        ))}
      </Container>
      <Form onSubmit={handleSubmit} className="row p-3">
        <Form.Group className="col-11 pl-1">
          <Form.Control type="text" placeholder="Your messages"></Form.Control>
        </Form.Group>
        <Form.Group className="col-1">
          <Button variant="primary w-100" type="submit">
            <i className="fas fa-paper-plane"></i>
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default MessageForm;
