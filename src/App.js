import React, { Component } from "react";
import MessageBar from "./MessageBar";
import ChatArea from "./ChatArea";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };

    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(text) {
    this.setState({ messages: this.state.messages.concat(text) });
  }

  render() {
    return (
      <div className="app">
        <ChatArea messages={this.state.messages} />
        <MessageBar sendMessage={this.sendMessage} />
      </div>
    );
  }
}

export default App;
