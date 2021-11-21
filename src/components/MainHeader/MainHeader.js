import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import Modal from '../UI/Modal/Modal';

const MainHeader = () => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation />
      <Modal/>
    </header>
  );
};

export default MainHeader;
