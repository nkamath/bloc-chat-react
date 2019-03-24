import React from 'react';
import Button from '../common/Button.js';

class RoomCreateForm extends React.Component {

  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.showForm) {
      return null;
    }

    return (
      <div>
      <form>
        <fieldset>
          <legend className = "mdl-textfield">Enter a room name</legend>
          <div>
            <input className = "mdl-textfield__input" type="text" value={this.props.newRoomName} onChange={this.props.handleTextChange}/>
          </div>
          <Button onClick={this.props.onClose}>
            Close
          </Button>

          <Button
            onClick={this.props.onSubmit}
            disabled={!this.props.newRoomName}>
            Submit
          </Button>

        </fieldset>
      </form>

      </div>
    );
  }
}

export default RoomCreateForm;
