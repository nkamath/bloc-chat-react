import React from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import './Sidebar.css'

class RoomCreateForm extends React.Component {

  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.showForm) {
      return null;
    }

    return (
      <div>
      <Form>
        <Form.Control
          className = "sidebar-input"
          type="text"
          placeholder="Enter a room name"
          value={this.props.newRoomName}
          onChange={this.props.handleTextChange}/>

          <Button
          className ="sidebar-button"
          variant="outline-secondary"
          onClick={this.props.onClose}>
            Close
          </Button>
          <Button
            className ="sidebar-button"
            variant="outline-primary"
            onClick={this.props.onSubmit}
            disabled={!this.props.newRoomName}>
            Submit
          </Button>
      </Form>

      </div>
    );
  }
}

export default RoomCreateForm;
