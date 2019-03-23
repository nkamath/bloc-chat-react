import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';


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
  render() {
    return (
      <div>
        <h1> Bloc Chat </h1>
        <RoomList firebase = {firebase} />
      </div>
    );
  }
}

export default App;
