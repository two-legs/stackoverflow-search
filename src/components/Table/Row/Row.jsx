import React, { PureComponent } from 'react';
import cn from 'classnames';
import './Row.css';

class Row extends PureComponent {
  render() {
    const {
      isActive,
      onClick,
      onMouseOver,
      children,
    } = this.props;

    return (
      <tr
        className={cn('Row', {'Row_active': isActive, 'Row_clickable': onClick})}
        onClick={onClick}
        onMouseOver={onMouseOver}
        ref={(row) => { this.row = row; }}
      >
        {React.Children.map(children, child => (
          <td className="Row__item">{child}</td>
        ))}
      </tr>
    );
  }
}

export default Row;