import React from "react";
import MessageBox from "./MessageBox";
import MessageResponse from "./MessageResponse";

const Chatbox = () => {
  return (
    <div className="chatbox">
      <MessageResponse />
      <div className="chatbox-footer">
        <MessageBox />
      </div>
    </div>
  );
};

export default Chatbox;
