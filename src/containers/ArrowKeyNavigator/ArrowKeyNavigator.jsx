import React, { Component } from 'react';
import './ArrowKeyNavigator.css';

export default class ArrowKeyNavigator extends Component {
  handleKeyDown = (event) => {
    switch (event.key) {
      case 'ArrowDown':
        if (this.props.onDownPress) {
          this.props.onDownPress();
        }
        break;
      case 'ArrowUp':
        if (this.props.onUpPress) {
          this.props.onUpPress();
        }
        break;
      case 'Enter':
        if (this.props.onEnter) {
          this.props.onEnter();
        }
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div onKeyDown={this.handleKeyDown} tabIndex="0" className="ArrowKeyNavigator">
        {this.props.children}
      </div>
    );
  }
}