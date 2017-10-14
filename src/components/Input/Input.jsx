import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';
import './Input.css';

class Input extends PureComponent {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onEnter: PropTypes.func,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);

    const { value } = props;
    this.state = { value: value || '' };
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
      <div className={cn('Input', this.props.className)}>
        <input
          value={this.state.value}
          type="text"
          className="Input__field"
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
