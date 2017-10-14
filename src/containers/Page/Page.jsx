import React from 'react';
import Spinner from '../../components/Spinner/Spinner';

import './Page.css';

const Page = ({ isLoading, children }) => (
  <div className="Page">
    {isLoading
      ? <div className="Page__spinner">
        <Spinner />
      </div>
      : children
    }
  </div>
);

export default Page;