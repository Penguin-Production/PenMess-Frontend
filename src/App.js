import {useRef, useEffect, useState} from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import "./App.css";
import Navigation from "./components/Navigation";
import Login from "./pages/Login"
import Home from "./pages/Home"
import Chat from "./pages/Chat"
import io from "socket.io-client"
function App() {
  const socketRef = useRef();
  const [id, setId] = useState();
  const [mess, setMess] = useState([]);
  useEffect(()=>{
    socketRef.current = io.connect('http://localhost:3000')
    socketRef.current.on('getId', data => {
      setId(data)
    })
    // socketRef.current.on('room-messages', dataGot => {
    //   setMess(oldMsgs => [...oldMsgs, dataGot.data])
    // })
  }, [])
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/chat" element={<Chat/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
