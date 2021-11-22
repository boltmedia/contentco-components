// Generated with util/create-component.js
import React from 'react';
import Logo from './Logo';

export default {
  title: 'Logo/Content.co',
  component: Logo
};

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});

Default.args = {};

export const Gray = Template.bind({});

Gray.args = {
  type: Logo.Type.DARKGRAY
};

export const White = Template.bind({});

White.args = {
  type: Logo.Type.WHITE
};

White.parameters = {
  backgrounds: { default: 'dark-blue' }
};

export const Blue = Template.bind({});

Blue.args = {
  type: Logo.Type.BLUE
};

export const DarkBlue = Template.bind({});

DarkBlue.args = {
  type: Logo.Type.DARKBLUE
};
