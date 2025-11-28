import React, { useState } from "react"; 
import viteLogo from "/vite.svg";
import {toast, Toaster} from "react-hot-toast";
import JoinCreateChat from "./components/JoinCreateChat";
import ChatPage from "./components/ChatPage";
function App(){
  const [count,setCount]=useState(0);
  return (
  <div>
    <JoinCreateChat/>

 </div>
  );
}

export default App;