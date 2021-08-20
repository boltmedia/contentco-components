// Generated with util/create-component.js
import React from 'react';
import Editor from './Editor';

export default {
  title: 'Input/QuillEditor',
  component: Editor
};

const Template = (args) => <Editor {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'description',
  label: 'Description',
  placeholder: 'Description',
  defaultValue: 'This is a sample default value',
  value: 'This is a sample value',
  locked: false
};
