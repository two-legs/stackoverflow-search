import React from 'react';
import PropTypes from 'prop-types';

const Table = props => (
  <table className="Table">
    {props.children}
  </table>
);

export default Table;