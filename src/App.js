import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import Sidebar from './components/Sidebar';
import ChatBox from './components/ChatBox';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBMxYYwvKO51ChIHvHTu04KtelWb9KBPK0",
    authDomain: "bloc-chat-ed4a7.firebaseapp.com",
    databaseURL: "https://bloc-chat-ed4a7.firebaseio.com",
    projectId: "bloc-chat-ed4a7",
    storageBucket: "bloc-chat-ed4a7.appspot.com",
    messagingSenderId: "552858669451"
  };
  firebase.initializeApp(config);




class App extends Component {
constructor(props) {
  super(props);

  this.state = {
    activeRoom: {},
    user: null
  };

}


handleRoomClick(room) {
  this.setState({ activeRoom: room });
}

setUser(user) {
  console.log("User is: " + user);
  this.setState({ user: user });

}

  render() {
    return (
      <Container id="app-container">
        <Row id="app-row">
          <Col md="4" className = "sidebar">
            <Sidebar
              firebase={firebase}
              activeRoom={this.state.activeRoom}
              handleRoomClick={this.handleRoomClick.bind(this)} />
          </Col>
          <Col md>
            <ChatBox
              firebase={firebase}
              activeRoom={this.state.activeRoom}
              setUser={this.setUser.bind(this)}
              user={this.state.user} />
          </Col>
        </Row>
      </Container>

    );
  }
}

export default App;
