import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ name, className, onClick }) => (
  <img
    src={require(`../../assets/${name}.svg`)}
    alt="name"
    className={className}
    onClick={onClick}
  />
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  onClick: PropTypes.func,
};

export default Icon;
