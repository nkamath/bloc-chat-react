import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './Chatbox.css'
class Message extends Component {

  formatDateFromUTC(UTCTime){
    var date = new Date(UTCTime);
    console.log(date);
    //date.getHours() + ":" + date.getMinutes();
    return date.toLocaleString();
  }
  render() {
    return(
      <div>
        <Container  className ="message">
          <Row >
            <Col>
              <p className ="username"> {this.props.message.username} </p>
            </Col>
            <Col>
              <p className="sentat"> {this.formatDateFromUTC(this.props.message.sentAt)} </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className ="content"> {this.props.message.content} </p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Message
