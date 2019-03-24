import React, {Component} from 'react';

class Button extends Component {
  constructor(props) {
    super(props);

  };

  render() {
    return(
      <button
        className="mdl-button mdl-js-button mdl-js-ripple-effect roomCreate"
        onClick = {this.props.onClick}
        disabled = {this.props.disabled}>
        {this.props.children}
      </button>
    )
  }
}

export default Button
