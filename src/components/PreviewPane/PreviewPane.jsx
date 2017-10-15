import React from 'react';
import Panel from '../Panel/Panel';

import './PreviewPane.css';
import Icon from "../Icon/Icon";

const PreviewPane = ({ title, children, onClose }) => (
  <div className="PreviewPane">
    <Panel>
      <Icon onClick={onClose} name="close" className="PreviewPane__close-link" />
      <h2 className="PreviewPane__title">{title}</h2>
    </Panel>
    <div className="PreviewPane__content">
      {children}
    </div>
  </div>
);

export default PreviewPane;