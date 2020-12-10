// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import Announcement from './Announcement';

describe('Test Component', () => {
  let props;

  beforeEach(() => {
    props = {
      foo: 'bar'
    };
  });

  const renderComponent = () => render(<Announcement {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();

    const component = getByTestId('Announcement');

    expect(component).toHaveTextContent('harvey was here');
  });
});
