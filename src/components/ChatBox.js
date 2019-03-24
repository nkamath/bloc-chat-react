import React, {Component} from 'react';
import MessageList from "./chatbox/MessageList.js";
import User from "./chatbox/User.js";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'




class ChatBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messageContent: "",
    };

    this.messagesRef = this.props.firebase.database().ref('messages');
  };

  handleSendMessage(){
    console.log("send message: " + this.state.messageContent);
  }

  handleMessageContentChange(event){
    this.setState({
      messageContent: event.target.value
    });
  }

  render() {
    return(
      <Container>
        <Row>
          <Col>
            <h3>{this.props.activeRoom.name}</h3>
          </Col>
          <Col>
            <User
            firebase={this.props.firebase}
            setUser={this.props.setUser}
            user={this.props.user} />
          </Col>
        </Row>
        <Row>
          <Col>
            <MessageList
              firebase={this.props.firebase}
              activeRoom={this.props.activeRoom}
              />
          </Col>
        </Row>
        <Row>
          <Col>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Message..."
              aria-label="Message..."
              aria-describedby="basic-addon2"
              value={this.state.messageContent}
              onChange={(e) => this.handleMessageContentChange(e)}
            />
            <InputGroup.Append>
              <Button disabled = {false} onClick = {() => this.handleSendMessage()} variant="outline-primary">Send</Button>
            </InputGroup.Append>
          </InputGroup>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ChatBox
