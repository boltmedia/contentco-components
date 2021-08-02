import React from 'react';
import ReactDOM from 'react-dom';
import { Button as ButtonA } from 'contentco-components';
import ButtonB from 'contentco-components/Button';

const HelloWorld = () => {
  return (
    <h1>
      <ButtonA>name Import button</ButtonA>
      <ButtonB>name Import button</ButtonB>
    </h1>
  );
};

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
