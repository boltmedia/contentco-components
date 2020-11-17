// Generated with util/create-component.js
import React from 'react';
import Select from './Select';

export default {
  title: 'Input/Select',
  component: Select
};

const data = [
  {
    id: 1,
    name: 'Apple'
  },
  {
    id: 2,
    name: 'Orange'
  },

  {
    id: 3,
    name: 'Banana'
  },

  {
    id: 4,
    name: 'Mango'
  }
];

const Template = (args) => <Select {...args} />;
const initialData = undefined;
export const Default = Template.bind({});
Default.args = {
  label: 'Fruit',
  name: 'description',
  getOptionLabel: ({ name }) => name,
  getOptionValue: ({ id }) => id,
  placeholder: 'Select a fruit',
  defaultValue: initialData,
  options: data
};

// TODO: Add more stories for select
