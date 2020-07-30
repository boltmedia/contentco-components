import React from 'react';

import { Logo } from 'contentco-components';

const App = () => {
  return (
    <>
      <h2>Logo</h2>
      <Logo />
      <Logo style={{ color: 'blue', width: '200px' }} />
    </>
  );
};

export default App;
