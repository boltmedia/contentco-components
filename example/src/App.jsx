import React from 'react';

import { Logo } from 'contentco-components';
import Styles from './App.module.scss';
const App = () => {
  return (
    <>
      <h2>Logo</h2>
      <Logo className={Styles.logo} />
    </>
  );
};

export default App;
