import React from 'react';
import Panel from '../Panel/Panel';

import './PreviewPane.css';

const PreviewPane = ({ children, onClose }) => (
  <div className="PreviewPane">
    <Panel>
      <span onClick={onClose} className="PreviewPane__close-link">Close</span>
    </Panel>
    <div className="PreviewPane__content">
      {children}
    </div>
  </div>
);

export default PreviewPane;