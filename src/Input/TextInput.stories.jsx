// Generated with util/create-component.js
import React from 'react';
import TextInput from './TextInput';

export default {
  title: 'Input/TextInput',
  component: TextInput
};

const Template = (args) => <TextInput {...args} />;
const initialData = '';

export const Default = Template.bind({});
Default.args = {
  label: 'First Name',
  name: 'firstName',
  defaultValue: initialData
};
