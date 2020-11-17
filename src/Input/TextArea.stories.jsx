// Generated with util/create-component.js
import React from 'react';
import TextArea from './TextArea';

export default {
  title: 'Input/TextArea',
  component: TextArea
};

const Template = (args) => <TextArea {...args} />;
const initialData = '';
export const Default = Template.bind({});
Default.args = {
  label: 'Description',
  name: 'description',
  placeholder: 'Hello world',
  defaultValue: initialData
};
