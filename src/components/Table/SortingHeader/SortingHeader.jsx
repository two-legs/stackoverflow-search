import React from 'react';
import Icon from "../../Icon/Icon";
import './SortingHeader.css';

const SortingHeader = ({ children, field, order, onSortChange }) => {
  let icon = 'sort';
  if (order) {
    icon = `sort${order === 'asc' ? 'Asc' : 'Desc' }`;
  }
  return (
    <div onClick={() => onSortChange(field)}>
      <span>
        {children}
      </span>
      <Icon name={icon} className="SortingHeader__icon" />
    </div>
  );
};

export default SortingHeader;