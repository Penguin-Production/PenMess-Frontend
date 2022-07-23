import React, { useEffect, useRef, useState } from "react";
import "../pages/MessageForm.css";

import { Form, Row, Col, Button, Container } from "react-bootstrap";
import messageApi from "./../utils/api-helper/messageApi";
import socket from "../utils/socket";
import ChatBox from "./ChatBox/ChatBox";
import usePersistedState from "./../utils/LocalStorageUtils/useLocalstrorage";
function MessageForm(props) {
  const { messages, conversation, socketRef, setMessages } = props;
  const [user, setUser] = usePersistedState("user");
  const [message, setMessage] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const tmp = {
      senderId: user.id,
      receiverId: conversation.members[1] || "",
      text: message,
    };
    socketRef.current.emit("sendMessage", tmp);
    setMessages((oldMess) => [...oldMess, tmp]);
    setMessage("");
  }

  return (
    <div className="messages-output d-flex flex-column w-100 pb-3 justify-content-end">
      <Container>
        {messages.map((message, index) => (
          <ChatBox userId={user.id} key={index} message={message} />
        ))}
      </Container>
      <Form onSubmit={handleSubmit} className="row p-3">
        <Form.Group className="col-11 pl-1">
          <Form.Control
            type="text"
            placeholder="Your messages"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="col-1">
          <Button onClick={handleSubmit} variant="primary w-100" type="submit">
            <i className="fas fa-paper-plane"></i>
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default MessageForm;
