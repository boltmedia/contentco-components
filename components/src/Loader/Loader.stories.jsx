// Generated with util/create-component.js
import React from 'react';
import Loader from './Loader';

export default {
  title: 'Loader',
  component: Loader
};

const Template = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const White = Template.bind({});

White.args = {
  type: Loader.Color.WHITE
};
White.parameters = {
  backgrounds: { default: 'dark-blue' }
};

export const Small = Template.bind({});

Small.args = {
  size: Loader.Size.SMALL
};

export const SmallWhite = Template.bind({});

SmallWhite.args = {
  size: Loader.Size.SMALL,
  type: Loader.Color.WHITE
};

SmallWhite.parameters = {
  backgrounds: { default: 'dark-blue' }
};

export const Inline = Template.bind({});

Inline.args = {
  type: Loader.Type.INLINE
};

export const Full = Template.bind({});

Full.args = {
  type: Loader.Type.FULL
};
