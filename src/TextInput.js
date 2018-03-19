import React from "react";

const MessageBar = props => (
  <div className="textInput">
    <input type="text" value={props.value} onChange={props.onChange} />
  </div>
);

export default MessageBar;
