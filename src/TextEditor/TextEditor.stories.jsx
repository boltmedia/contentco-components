// Generated with util/create-component.js
import React from 'react';
import TextEditor from './TextEditor';

export default {
  title: 'TextEditor',
  component: TextEditor
};

const Template = (args) => <TextEditor onChange={()=>{console.log('sdsd')}} showToolbar={true} placeholder={"sample text "}  {...args} />;
const initialData = '';

export const Default = Template.bind({});
Default.args = {
  label: 'Rich editor',
  name: 'TextEditor',
  defaultValue: initialData
};
