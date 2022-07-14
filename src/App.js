import { useRef, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import socket from "./utils/socket";
function App() {
  const [id, setId] = useState();
  const [mess, setMess] = useState([]);

  useEffect(() => {
    socket.on("connection", () => {
      console.log(socket);
      console.log("connected");
    });
  }, [socket]);
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
