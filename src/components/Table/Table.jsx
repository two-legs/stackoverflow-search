import React from 'react';
import PropTypes from 'prop-types';
import './Table.css';

const Table = props => (
  <table className="Table">
    {props.children}
  </table>
);

export default Table;