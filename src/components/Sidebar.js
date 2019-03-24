import React, {Component} from 'react';

import RoomCreate from './sidebar/RoomCreate';
import RoomList from './sidebar/RoomList';


class Sidebar extends Component {

  render() {
    return(
      <div>
        <h1> Bloc Chat </h1>
        <RoomList firebase = {this.props.firebase} />
        <RoomCreate firebase = {this.props.firebase} />
      </div>
    )
  }
}

export default Sidebar