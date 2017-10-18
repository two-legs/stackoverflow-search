import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './Row.css';

const Row = props => (
  <tr
    className={cn('Row', { 'Row_active': props.isActive, 'Row_clickable': props.onClick })}
    onClick={props.onClick}
    onMouseOver={props.onMouseOver}
  >
    {React.Children.map(props.children, child => (
      <td className="Row__item">{child}</td>
    ))}
  </tr>
);

Row.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func,
};

export default Row;