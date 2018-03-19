import React, { Component } from "react";
import TextInput from "./TextInput";
import SendButton from "./SendButton";
import { slashCommands } from "./utils";

class MessageBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", disableSend: false };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.disableSend = this.disableSend.bind(this);
  }

  onChange(e) {
    this.setState({ value: e.target.value });
  }

  onClick() {
    slashCommands(this.state.value, this.props.sendMessage, this.disableSend);
    this.setState({ value: "" });
  }

  disableSend() {
    this.setState({ disableSend: true });
  }

  render() {
    return (
      <div className="messageBar">
        <TextInput onChange={this.onChange} value={this.state.value} />
        <SendButton
          onClick={this.onClick}
          disabled={this.state.value.length < 1 || this.state.disableSend}
        />
      </div>
    );
  }
}

export default MessageBar;
