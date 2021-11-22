import React from 'react';
import Action from './Action';

export default {
  title: 'Action',
  component: Action
};

const Template = (args) => (
  <div style={{ display: 'flex' }}>
    <Action {...args}>{args.children}</Action>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Action should be right aligned in flex box'
};
