import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  padding: 10px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

const ExampleComponent = ({ text }) => {
  return <Container>{text}</Container>;
};

export default ExampleComponent;
