import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center p-2 pl-3 shadow-sm">
      <img
          className="h-8"
          src="https://lh3.googleusercontent.com/a/AGNmyxa3a3Ri8X3MYKHhX8E6TDO58E-PMnG4IbrHALxbZA=s32"
          alt="usericon"
        />
      <span className="font-bold mx-2">{name}</span>
      <span className="mx-2 ">{message}</span>
    </div>
  );
};

export default ChatMessage;
