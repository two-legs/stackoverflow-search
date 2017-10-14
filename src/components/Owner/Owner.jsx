import React from 'react';
import './Owner.css';

const Owner = ({ owner, onClick }) => (
  <span onClick={() => onClick({ ...owner })}>
    {owner.displayName}
  </span>
);

export default Owner;