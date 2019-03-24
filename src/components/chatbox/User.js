import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

import './Chatbox.css'


class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSignedIn: false
    };

  }

  componentDidMount(){
    this.props.firebase.auth().onAuthStateChanged( user => {
      this.props.setUser(user);
      if(user){
        this.setState({isSignedIn: true});
      } else {
        this.setState({isSignedIn: false});
      }
    });
  }

  toggleSignIn() {
    var user = null;
    var isSignedIn = false;

    if (!this.state.isSignedIn) {
      const provider = new this.props.firebase.auth.GoogleAuthProvider();
      this.props.firebase.auth().signInWithPopup(provider);
    } else {
      this.props.firebase.auth().signOut();
    }
  }


  render() {
    return(
      <div>
        <Button
        id="sign-in-button"
        variant="outline-primary"
        size="sm"
        onClick = {() => this.toggleSignIn()}>
        {this.state.isSignedIn ? "Sign Out" : "Sign In"}
      </Button>
      <h4>
        <Badge variant="primary">{this.props.user?this.props.user.displayName: "Guest"}</Badge>
      </h4>
      </div>
    )
  }
}

export default User
