import React from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

import './Sidebar.css'

class RoomCreateForm extends React.Component {

  render() {

    return (
      <div>
      <InputGroup>
        <Form.Control
          className = "sidebar-input"
          type="text"
          size="sm"
          placeholder="Enter a room name"
          value={this.props.newRoomName}
          onChange={this.props.handleTextChange}
          onKeyPress={(e) => this.props.handleKeyPress(e)}
          />

          <Button
            className ="sidebar-button"
            variant="outline-primary"
            size="sm"
            onClick={this.props.onSubmit}
            disabled={!this.props.newRoomName}>
            Submit
          </Button>
      </InputGroup>

      </div>
    );
  }
}

export default RoomCreateForm;
