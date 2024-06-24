import React from "react";
import SendMsg from "../../assets/images/send-msg.png";
import Clear from "../../assets/images/clear.png";
import Add from "../../assets/images/add.png";

const btnGrp = {
  display: "flex",
  flexDirection: "column",
  padding: "10px",
  justifyContent: "space-between",
};

const MessageBox = () => {
  return (
    <div className="messagebox-container">
      <div style={btnGrp}>
        <button className="msg-box-buttons">
          <img src={Clear} alt="Clear" />
        </button>
        <button className="msg-box-buttons">
          <img src={Add} alt="Add" />
        </button>
      </div>
      <div className="msg-container">
        <textarea
          type="text"
          class="input-box"
          placeholder="Type a new question..."
        />
        <button className="send-button">
          <img src={SendMsg} alt="Send" />
        </button>
      </div>
    </div>
  );
};

export default MessageBox;
