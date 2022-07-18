import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import MessageForm from "../components/MessageForm";
import { useSearchParams } from "react-router-dom";
import usePersistedState from "./../utils/LocalStorageUtils/useLocalstrorage";
import socket from "../utils/socket";

function Chat() {
  // let token = new URLSearchParams(window.location.search).get("token");
  // cookies.set("token", token, { path: "/" , });
  const [user, setUser] = usePersistedState("user");
  const [searchParams, setSearchParams] = useSearchParams();
  const [conversations, setConversations] = useState([]);
  const [currentReceiver, setCurrentReceiver] = useState({
    id: "",
    messages: [],
  });
  let [messages, setMessages] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      const data = {};
      for (let key of searchParams.keys()) {
        data[key] = searchParams.get(key);
      }
      if (data.id !== undefined) {
        setUser(data);
        socket.emit("addUser", data.id);
      }
    };

    //TODO: show message when click on a user
    //TODO: get message from a specific user
    const getMessages = async () => {};
    getUser();
    socket.on("getMessage", (message) => {
      console.log(conversations[currentReceiver].members[1]);
      if (message.senderId === conversations[currentReceiver].members[1]) {
        let tmp = messages;
        tmp.push({
          isSender: false,
          text: message.text,
        });
        console.log(tmp);
        setMessages(tmp);
      }
    });
  }, [searchParams, setUser, currentReceiver]);

  return (
    <Container className="pt-3">
      <Row>
        <Col md={4} className="p-3">
          <div className="h2">Hello {user !== undefined && user.name}</div>
          <Sidebar
            userId={user.googleId}
            setCurrentReceiver={setCurrentReceiver}
            currentReceiver={currentReceiver}
            conversations={conversations}
            onLoadData={setConversations}
          />
        </Col>
        <Col md={8} className="p-5 d-flex">
          <MessageForm messages={messages} />
        </Col>
      </Row>
    </Container>
  );
}

export default Chat;
