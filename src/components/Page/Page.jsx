import React from 'react';
import Spinner from '../Spinner/Spinner';
import { CSSTransition } from 'react-transition-group';

import './Page.css';

const Fade = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={1000}
    classNames="fadeTranslate"
    mountOnEnter
    unmountOnExit
  >
    {children}
  </CSSTransition>
);

const Page = ({ isLoading, children }) => (
  <div className="Page">
    {isLoading &&
      <div className="Page__spinner">
        <Spinner/>
      </div>
    }
    <Fade in={!isLoading}>
      <div>
        {!isLoading ? children : null}
      </div>
    </Fade>
  </div>
);

export default Page;