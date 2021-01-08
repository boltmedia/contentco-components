// Generated with util/create-component.js
import React from "react";
import SegmentedControl from "./SegmentedControl";

export default {
  title: "SegmentedControl"
};

const Template = (args) => <SegmentedControl {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [{ label: 'On', value: 'on' }, { label: 'Off', value: 'off' }],
  width: 110,
  height: 30,
  //value: 'on',
  defaultValue: 'on',
  name: 'switch',
  disabled: false
};
