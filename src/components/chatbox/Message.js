import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './Chatbox.css'
class Message extends Component {

  render() {
    return(
      <div>
        <Container>
          <Row className ="message">
            <Col>
              <p className ="username"> {this.props.message.username} </p>
              <p className ="content"> {this.props.message.content} </p>
            </Col>
            <Col>
              <p className="sentat"> {this.props.message.sentAt} </p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Message
