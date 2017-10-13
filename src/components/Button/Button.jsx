import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = props => (
  <button {...props} className="Button" onClick={props.onClick}>
    {props.children}
  </button>
);


Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;

