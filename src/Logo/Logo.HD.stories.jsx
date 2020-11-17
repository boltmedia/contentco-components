// Generated with util/create-component.js
import React from 'react';
import Logo from './Logo';

export default {
  title: 'Logo/Hire Digital',
  component: Logo
};

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});

Default.args = {
  site: '2'
};

export const Gray = Template.bind({});

Gray.args = {
  type: Logo.Type.DARKGRAY,
  site: '2'
};

export const White = Template.bind({});

White.args = {
  type: Logo.Type.WHITE,
  site: '2'
};

White.parameters = {
  backgrounds: { default: 'dark-blue' }
};

export const Blue = Template.bind({});

Blue.args = {
  type: Logo.Type.BLUE,
  site: '2'
};

export const DarkBlue = Template.bind({});

DarkBlue.args = {
  type: Logo.Type.DARKBLUE,
  site: '2'
};
