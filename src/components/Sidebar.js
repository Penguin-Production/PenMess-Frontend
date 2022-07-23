import React, { useState, useEffect } from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import "./Sidebar.css";
import conversationApi from "./../utils/api-helper/conversationapi";
import Modal from "./Modal";
import ReceiverBox from "./ReceiverBox";
const Sidebar = (props) => {
  const {
    userId,
    conversations,
    onLoadData,
    currentReceiver,
    setCurrentReceiver,
  } = props;
  const [showModal, toggleShowModal] = useState(false);
  const getConversations = async () => {
    let tmpConversation = await conversationApi
      .get(userId)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
    onLoadData(tmpConversation);
  };
  useEffect(() => {
    getConversations();
  }, [userId, onLoadData]);

  const selectReceiver = (idx) => {
    setCurrentReceiver(idx);
  };
  return (
    <div className="">
      <h2>Chat</h2>
      <div className="row justify-content-end p-3">
        <Button className="col-12" onClick={() => toggleShowModal(true)}>
          Create message
        </Button>
      </div>
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

      <Modal
        senderId={userId}
        showModal={showModal}
        conversations={conversations}
        getConversations={getConversations}
        toggleShowModal={toggleShowModal}
      />
    </div>
  );
};

export default Sidebar;
