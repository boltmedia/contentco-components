// Generated with util/create-component.js
import React from 'react';
import Card from './Card';

export default {
  title: 'Card/Full Example',
  component: Card
};

const Template = ({ headerData, itemData, noteData, footerData, ...args }) => (
  <Card {...args}>
    <Card.Header {...headerData} />
    <Card.Note {...noteData} />
    <Card.Item {...itemData} />
    <Card.Footer {...footerData} />
  </Card>
);
export const FullExample = Template.bind({});
FullExample.args = {
  label: 'Fruit',
  headerData: {
    title: 'Card With Header'
  },
  itemData: {
    children: `Card Item Content`
  },
  footerData: {
    children: `Card Footer`
  },
  noteData: {
    children: 'Card Note'
  }
};

// TODO: Add more stories for Card
