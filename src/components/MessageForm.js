import React from "react";
import "../pages/MessageForm.css";

import { Form, Row, Col, Button } from "react-bootstrap";
function MessageForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <Form
      onSubmit={handleSubmit}
      className="messages-output row w-100 pb-3 align-items-end"
    >
      <Form.Group className="col-11 pl-1">
        <Form.Control type="text" placeholder="Your messages"></Form.Control>
      </Form.Group>
      <Form.Group className="col-1">
        <Button variant="primary w-100" type="submit">
          <i className="fas fa-paper-plane"></i>
        </Button>
      </Form.Group>
      {/* <div className="row p-0"></div> */}
    </Form>
  );
}

export default MessageForm;
