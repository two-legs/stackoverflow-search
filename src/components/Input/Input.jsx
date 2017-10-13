import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Input.css';

class Input extends PureComponent {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onEnter: PropTypes.func,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = { value: this.props.value };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      this.setState({ value: nextProps.value });
    }
  }

  handleChange = (event) => {
    const value = event.target.value;

    this.setState({ value }, () => {
      if (this.props.onChange) this.props.onChange(value);
    });
  };

  handleKeyPress = (event) => {
    if (this.props.onEnter && event.key === 'Enter') {
      this.props.onEnter(this.state.value);
    }
  };

  render() {
    return (
      <div className="Input">
        <input
          type="text"
          className="Input__field"
          value={this.state.value}
          onChange={this.handleChange}
          disabled={this.props.disabled}
          placeholder={this.props.placeholder}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}

export default Input;
