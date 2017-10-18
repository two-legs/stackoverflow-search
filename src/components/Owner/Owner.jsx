import React from 'react';
import PropTypes from 'prop-types';
import './Owner.css';

const Owner = ({ owner, onClick }) => (
  <span className="Owner" onClick={event => onClick({ ...owner }, event)}>
    {owner.displayName}
  </span>
);

Owner.propTypes = {
  owner: PropTypes.object,
  onClick: PropTypes.func,
};

export default Owner;