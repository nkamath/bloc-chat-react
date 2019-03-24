import React, {Component} from 'react';
import MessageList from "./chatbox/MessageList.js";
import User from "./chatbox/User.js";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



class ChatBox extends Component {
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
      </Container>
    )
  }
}

export default ChatBox
