import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import MessageForm from "../components/MessageForm";
import Cookies from "universal-cookie";
import { useSearchParams } from "react-router-dom";
import usePersistedState from "./../utils/LocalStorageUtils/useLocalstrorage";
import socket from "../utils/socket";
function Chat() {
  // let token = new URLSearchParams(window.location.search).get("token");
  // cookies.set("token", token, { path: "/" , });
  const [user, setUser] = usePersistedState("user");
  const [searchParams, setSearchParams] = useSearchParams();
  const [currendReceiver, setCurrentReceiver] = useState({
    id: "",
    messages: [],
  });
  useEffect(() => {
    const getUser = async () => {
      let data = {};
      for (let key of searchParams.keys()) {
        data[key] = searchParams.get(key);
      }
      if (data.id !== undefined) {
        setUser(data);
        socket.emit("addUser", data.id);
      }
    };
    getUser();
  }, [searchParams, setUser]);
  return (
    <Container>
      <div className="h2">Hello {user !== undefined && user.name}</div>
      <Row>
        <Col md={4} className="p-3">
          <Sidebar userId={user.googleId} />
        </Col>
        <Col md={8} className="p-5 d-flex">
          <MessageForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Chat;
