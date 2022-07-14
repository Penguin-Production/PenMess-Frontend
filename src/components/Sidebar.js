import React, { useState, useEffect } from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import "./Sidebar.css";
import conversationApi from "./../utils/api-helper/conversationapi";
import Modal from "./Modal";
import { current } from "@reduxjs/toolkit";
import ReceiverBox from "./ReceiverBox";
const Sidebar = (props) => {
  const { userId } = props;
  const [conversations, setConversations] = useState([]);
  const [showModal, toggleShowModal] = useState(false);
  const [currentReceiver, setCurrentReceiver] = useState();
  const getConversations = async () => {
    let tmpConversation = await conversationApi
      .get(userId)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
    setConversations(tmpConversation);
  };
  useEffect(() => {
    getConversations();
  }, []);

  const selectReceiver = (idx) => {
    console.log(idx);
    setCurrentReceiver(idx);
  };
  return (
    <div className="">
      <h2>Chat</h2>
      <div className="d-flex sidebar flex-column ">
        {conversations.map((friend, index) => {
          return (
            <ReceiverBox
              key={index}
              current={currentReceiver}
              selected={index}
              receiver={friend.members[1]}
              selectReceiver={selectReceiver}
            ></ReceiverBox>
          );
        })}
      </div>
      <div className="row justify-content-end p-3">
        <Button className="col-12" onClick={() => toggleShowModal(true)}>
          Create message
        </Button>
      </div>
      <Modal
        senderId={userId}
        showModal={showModal}
        getConversations={getConversations}
        toggleShowModal={toggleShowModal}
      />
    </div>
  );
};

export default Sidebar;
