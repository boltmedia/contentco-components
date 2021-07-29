// Generated with util/create-component.js
import React from 'react';
import  Button  from './Button';


export default {
  title: 'Button',
  component: Button
};

const Template = (args) => <Button {...args}>{args.label}</Button>;

export const Default = Template.bind({});
Default.args = {
  label: 'Submit'
};

export const Blue = Template.bind({});
Blue.args = {
  type: Button.Type.BLUE,
  label: 'Submit'
};

export const White = Template.bind({});
White.args = {
  type: Button.Type.WHITE,
  label: 'Submit'
};
White.parameters = {
  backgrounds: { default: 'dark-blue' }
};

export const DarkBlue = Template.bind({});
DarkBlue.args = {
  type: Button.Type.DARKBLUE,
  label: 'Submit'
};

export const Gray = Template.bind({});
Gray.args = {
  type: Button.Type.GRAY,
  label: 'Submit'
};

export const LightGray = Template.bind({});
LightGray.args = {
  type: Button.Type.LIGHT_GRAY,
  label: 'Submit'
};

export const BlueOutline = Template.bind({});
BlueOutline.args = {
  type: Button.Type.BLUE_OUTLINE,
  label: 'Save'
};

export const RedOutline = Template.bind({});
RedOutline.args = {
  type: Button.Type.RED_OUTLINE,
  label: 'Delete'
};

export const WhiteBlueOutline = Template.bind({});
WhiteBlueOutline.args = {
  type: Button.Type.WHITE_BLUE_OUTLINE,
  label: 'Save'
};
WhiteBlueOutline.parameters = {
  backgrounds: { default: 'dark-blue' }
};
