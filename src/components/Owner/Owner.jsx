import React from 'react';
import './Owner.css';

const Owner = ({ owner, onClick }) => (
  <span className="Owner" onClick={event => onClick({ ...owner }, event)}>
    {owner.displayName}
  </span>
);

export default Owner;