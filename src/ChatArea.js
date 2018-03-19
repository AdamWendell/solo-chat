import React, { Component } from "react";

const ChatArea = props => (
  <div className="chatArea">{props.messages.map(msg => <pre>{msg}</pre>)}</div>
);

export default ChatArea;
