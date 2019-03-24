import React, {Component} from 'react';
import RoomCreateForm from './RoomCreateForm';
import Button from 'react-bootstrap/Button'

import './Sidebar.css'

class RoomCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFormOpen: false,
      newRoomName: ""
    };

    this.roomsRef = this.props.firebase.database().ref('rooms');
  };

showRoomCreateForm(){
  this.setState({
    isFormOpen: true
  });
}

closeRoomCreateForm(){
  this.setState({
    isFormOpen: false
  });
}

handleFormSubmit() {
  if(this.state.newRoomName !== ""){
    this.roomsRef.push({
      name: this.state.newRoomName
    });
    this.setState({
      isFormOpen: false,
      newRoomName: ""
    });
  }
}

handleTextChange(event) {
  this.setState({
    newRoomName: event.target.value
  });
}


  render() {
    return(
      <div>
        <Button
          className ="sidebar-button"
          variant="outline-primary"
          onClick = {() => this.showRoomCreateForm()}>
          Create Room
        </Button>
        <RoomCreateForm
          showForm={this.state.isFormOpen}
          onClose={() => this.closeRoomCreateForm()}
          onSubmit={() => this.handleFormSubmit()}
          newRoomName= {this.state.newRoomName}
          handleTextChange={(e) => this.handleTextChange(e)} />
      </div>
    )
  }
}

export default RoomCreate
