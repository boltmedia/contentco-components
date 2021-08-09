import React from 'react';
import ReactDOM from 'react-dom';
import { Button as ButtonA } from 'contentco-components';
import ButtonB from 'contentco-components/Button';
import Container from '@material-ui/core/Container';

const HelloWorld = () => {
  return (
    <h1>
       <Container maxWidth="sm">
       <ButtonA>Button A</ButtonA>
      <ButtonB>Button B</ButtonB>
      </Container>
      
    </h1>
  );
};

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
