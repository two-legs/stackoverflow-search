import React from 'react';
import PropTypes from 'prop-types';

const HeaderRow = props => (
  <thead>
    <tr className="HeaderRow">
      {React.Children.map(props.children, child => (
        <th className="HeaderRow__item">{child}</th>
      ))}
    </tr>
  </thead>
);

export default HeaderRow;