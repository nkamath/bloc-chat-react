import React, {Component} from 'react';
import Message from './Message.js';

class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };

    this.messagesRef = this.props.firebase.database().ref('messages');
  };

  componentDidMount() {
   this.messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat( message ) });
      console.log(message.roomId);
   });

 }


  render() {
    return(
      <section className="messageList">
      {this.state.messages.filter((message) => message.roomId == this.props.activeRoom.key).map((message, index) =>
        <Message key={index} message = {message} /> )
      }
      </section>
    )
  }
}

export default MessageList
