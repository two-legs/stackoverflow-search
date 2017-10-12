import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Row = props => (
  <tr className={cn('Row', { 'Row_active': props.isActive })}>
    {React.Children.map(props.children, child => (
      <td className="Row__item">{child}</td>
    ))}
  </tr>
);

export default Row;