// Generated with util/create-component.js
import React from 'react';
import Text from './Text';

export default {
  title: 'Text',
  component: Text
};

const Template = (args) => <Text {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: 'This is some arbitrary text.'
};

export const Primary = Template.bind({});

Primary.args = {
  type: Text.Styles.primary,
  children: 'This is a headline'
};

export const Secondary = Template.bind({});

Secondary.args = {
  type: Text.Styles.secondary,
  children: 'This is a subheadline'
};

export const White = Template.bind({});

White.args = {
  type: Text.Styles.secondary,
  color: Text.Styles.white,
  children: 'This is a subheadline'
};

White.parameters = {
  backgrounds: { default: 'dark-blue' }
};
