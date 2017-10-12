import React from 'react';
import PropTypes from 'prop-types';

import Row from '../Row/Row';

const Rows = props => (
  <tbody className="Rows">
    {props.children}
  </tbody>
);

export default Rows;