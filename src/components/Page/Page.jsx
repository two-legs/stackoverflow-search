import React from 'react';
import Spinner from '../Spinner/Spinner';
import { CSSTransition } from 'react-transition-group';

import './Page.css';

const Fade = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={5000}
    classNames="fadeTranslate"
    mountOnEnter
    unmountOnExit
  >
    <div>
      {children}
    </div>
  </CSSTransition>
);

const Page = ({ isLoading, children }) => (
  <div className="Page">
    <Fade in={isLoading}>
      <div className="Page__spinner">
        <Spinner />
      </div>
    </Fade>
    <Fade in={!isLoading}>{children}</Fade>
  </div>
);

export default Page;