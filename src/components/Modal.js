import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ReactModal from "react-modal";
import conversationApi from "./../utils/api-helper/conversationapi";

const customStyles = {
  overlay: {
    top: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: 500,
    height: 150,
    position: "relative",
    inset: 0,
  },
};
const Modal = (props) => {
  const { showModal, toggleShowModal, senderId, getConversations } = props;
  const [receiverId, setReceiverId] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(receiverId);
    conversationApi.post(senderId, receiverId);
    getConversations();
    setReceiverId();
    toggleShowModal(false);
  };
  ReactModal.setAppElement("body");
  return (
    <ReactModal
      onRequestClose={() => toggleShowModal(false)}
      isOpen={showModal}
      contentLabel="Create a new message"
      style={customStyles}
    >
      <Container>
        <Row className="gap-3">
          <Button className="col-2" onClick={() => toggleShowModal(false)}>
            Cancel
          </Button>
          <Button className="col-2" onClick={onSubmit}>
            Send
          </Button>
        </Row>
      </Container>
      <Container className="mt-3 p-0">
        <Form className="col" onSubmit={onSubmit}>
          <Form.Group>
            <Form.Control
              value={receiverId}
              onChange={(e) => setReceiverId(e.target.value)}
              type="text"
              placeholder="Enter your partner id"
            />
          </Form.Group>
        </Form>
      </Container>
    </ReactModal>
  );
};

export default Modal;
