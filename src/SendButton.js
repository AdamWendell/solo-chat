import React, { Component } from "react";

class SendButton extends Component {
  render() {
    return (
      <button onClick={this.props.onClick} disabled={this.props.disabled}>
        Send
      </button>
    );
  }
}

export default SendButton;
