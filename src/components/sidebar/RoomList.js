import React, {Component} from 'react';
import "./Sidebar.css"

class RoomList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: []
    };

    this.roomsRef = this.props.firebase.database().ref('rooms');
  };

  componentDidMount() {
   this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) });
   });
   // TODO: Check if child has been deleted
 }
 componentWillUnmount() {
   // TODO: remove event handler from child_added
 }

  render() {
    return(
      <section className="roomList">
      {
        this.state.rooms.map((room, index) =>
          <h3
            className={this.props.activeRoom.key===room.key ? "activeRoom" : "room"}
            key={index}
            onClick={()=>this.props.handleRoomClick(room)}
            >
            {room.name}
          </h3> )
      }
      </section>
    )
  }
}

export default RoomList
