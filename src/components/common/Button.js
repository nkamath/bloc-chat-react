import React, {Component} from 'react';

class Button extends Component {
  render() {
    return(
      <button
        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
        onClick = {this.props.onClick}
        disabled = {this.props.disabled}>
        {this.props.children}
      </button>
    )
  }
}

export default Button
