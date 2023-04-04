import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "./helper";

const Livechat = () => {
  const [liveMessge, setLiveMessage] = useState("")
  const messages = useSelector((state) => state.chat.message);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Api Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(30),
        })
      );
    }, 1500);
    return () => clearInterval(timer);
  }, [dispatch]);

const postLiveMessage = (e)=>{
  e.preventDefault()
  dispatch(addMessage({
    name:"Abhishek",
    message:liveMessge
  }))
  setLiveMessage("")
}

  return (
    <>
      <div className="w-full h-[430px] p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {messages.map((message, index) => (
            <ChatMessage {...message} key={index} />
          ))}
        </div>
      </div>
      <form onSubmit={postLiveMessage} className="w-full p-2  border border-black rounded-lg  bg-slate-100">
        <input type="text" className="w-96 rounded-md px-2" value={liveMessge} onChange={e=>setLiveMessage(e.target.value)}/>
        <button className="px-2 mx-2 bg-green-100"><img className="h-6" src="https://cdn-icons-png.flaticon.com/512/3106/3106794.png" alt="" /></button>
      </form>
    </>
  );
};

export default Livechat;
