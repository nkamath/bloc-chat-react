import React, {Component} from 'react';
import MessageList from "./chatbox/MessageList.js";


class ChatBox extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return(
      <div>
        <h3>{this.props.activeRoom.name}</h3>
        <MessageList
          firebase={this.props.firebase}
          activeRoom={this.props.activeRoom}
          />
      </div>
    )
  }
}

export default ChatBox
