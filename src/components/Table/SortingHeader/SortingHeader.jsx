import React from 'react';

const SortingHeader = ({ children, field, order, onSortChange }) => (
  <div onClick={() => onSortChange(field)}>
    {children}
  </div>
);

export default SortingHeader;