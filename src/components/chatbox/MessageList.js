import React, {Component} from 'react';

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
        <p key={index}> {message.content} </p> )
      }
      </section>
    )
  }
}

export default MessageList
