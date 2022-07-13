import React from "react";
import { ListGroup } from "react-bootstrap";
import axois from "axios"
function Sidebar() {
  function getRoom(){
    axois.get('http://localhost:3000/user').then(data=>{
      console.log(data)
    })
  }
  getRoom()
  const friends = ["first room", "second room", "third room"];
  return (
    <div>
      <h2>Chat</h2>
      <ListGroup>
        {friends.map((friend, idx) => (
           <ListGroup.Item key={idx}>{friend}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Sidebar;
