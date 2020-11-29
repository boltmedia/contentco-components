// Generated with util/create-component.js
import React from 'react';
import Quill from './Quill';

export default {
  title: 'Input/Quill',
  component: Quill
};

const Template = (args) => <Quill {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'description',
  label: 'Description',
  placeholder: 'Description',
  defaultValue: 'This is a sample default value',
  value: 'This is a sample value',
  locked: false,
  active: false
};
