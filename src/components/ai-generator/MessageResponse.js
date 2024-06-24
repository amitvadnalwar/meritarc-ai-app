import React from "react";
import "./style.css";

const MessageResponse = () => {
  return (
    <div class="chat-container">
      <div class="message flex-end">
        <div class="message-content">
          <p>Hello Amit!</p>
        </div>
      </div>

      <div class="message message-received">
        <div class="message-content">
          <p>The code below vertically aligns the text within a div perfectly fine but when I try to center it, only the text that needs to be wrapped gets centered. When the text is short, say, 5-6 words, the text is not centered. I don't know if it is just me or I'm doing something wrong here.</p>
          
        </div>
      </div>
    </div>
  );
};

export default MessageResponse;
