import React from 'react';
import PropTypes from 'prop-types';

import './Tag.css';

const Tag = ({ children, onClick}) => (
  <span className="Tag" onClick={onClick}>
    {children}
  </span>
);

Tag.propTypes = {
  onClick: PropTypes.func,
};

export default Tag;