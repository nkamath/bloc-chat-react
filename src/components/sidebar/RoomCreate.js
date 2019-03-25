import React, {Component} from 'react';
import RoomCreateForm from './RoomCreateForm';
import Button from 'react-bootstrap/Button'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

import './Sidebar.css'

class RoomCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newRoomName: ""
    };

    this.roomsRef = this.props.firebase.database().ref('rooms');
  };


handleFormSubmit() {
  if(this.state.newRoomName !== ""){
    this.roomsRef.push({
      name: this.state.newRoomName
    });
    this.setState({
      newRoomName: ""
    });
  }
}

handleTextChange(event) {
  this.setState({
    newRoomName: event.target.value
  });
}

handleKeyPress(event) {
  if(event.key == 'Enter'){
    this.handleFormSubmit();
  }
}


  render() {
    return(
      <div>
        <OverlayTrigger
          trigger="click" rootClose
          placement="right"
          overlay={
            <Popover id="popover-basic">
              <RoomCreateForm
                onSubmit={() => this.handleFormSubmit()}
                handleKeyPress={this.handleKeyPress.bind(this)}
                newRoomName= {this.state.newRoomName}
                handleTextChange={(e) => this.handleTextChange(e)} />
            </Popover>} >
            <Button
              className ="sidebar-button"
              id = "create-room-button"
              variant="outline-primary"
              size="sm" >
              Create Room
            </Button>
          </OverlayTrigger>
      </div>
    )
  }
}

export default RoomCreate
