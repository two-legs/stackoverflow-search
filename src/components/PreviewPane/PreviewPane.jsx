import React from 'react';
import PropTypes from 'prop-types';
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

PreviewPane.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
};

export default PreviewPane;