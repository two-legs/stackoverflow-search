import React from 'react';
import PropTypes from 'prop-types';

import './Tag.css';

const Tag = ({ tag, onClick}) => (
  <span className="Tag" onClick={event => onClick(tag)}>
    {tag}
  </span>
);

Tag.propTypes = {
  onClick: PropTypes.func,
};

export default Tag;