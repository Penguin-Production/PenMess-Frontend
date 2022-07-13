import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
function MessageForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    
        <Form onSubmit={handleSubmit} className="row w-100">
            <Col md={11}>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Your messages"
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col md={1}>
              <Button
                variant="primary"
                type="submit"
                style={{backgroundColor: "organe" }}
              >
                
                <i className="fas fa-paper-plane"></i>
              </Button>
            </Col>
        </Form>

  );
}

export default MessageForm;
