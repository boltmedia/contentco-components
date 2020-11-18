// Generated with util/create-component.js
import React from 'react';
import Icon from './Icon';

export default {
  title: 'Icons/Admin',
  component: Icon
};

const Template = (args) => (
  <React.Fragment>
    <h3>Icons</h3>
    <Icon.External {...args} />
    <Icon.Add {...args} />
    <Icon.Close {...args} />
    <Icon.Logout {...args} />
    <Icon.Home {...args} />
    <Icon.Talent {...args} />
    <Icon.Profile {...args} />
    <Icon.Brief {...args} />
    <Icon.Down {...args} />
    <Icon.Drag {...args} />
    <Icon.Edit {...args} />
    <Icon.Preview {...args} />
    <Icon.More {...args} />
    <Icon.User {...args} />
    <Icon.Search {...args} />
    <Icon.Xero {...args} />
    <Icon.Refresh {...args} />
    <Icon.Filter {...args} />
    <Icon.Email {...args} />
    <Icon.Split {...args} />
    <Icon.Minimize {...args} />
    <Icon.Company {...args} />

    <Icon.Timesheet {...args} />

    <Icon.Paperclip {...args} />
    <Icon.Stretch {...args} />
    <Icon.Shrink {...args} />
    <Icon.ChevronLeft {...args} />
    <Icon.ChevronRight {...args} />
    <Icon.Play {...args} />
    <Icon.Stop {...args} />
    <Icon.Folder {...args} />
    <Icon.Invoice {...args} />

    <h3>Small Icons</h3>

    <Icon.MinimizeSmall {...args} />
    <Icon.SplitSmall {...args} />
    <Icon.EditSmall {...args} />
    <Icon.BinSmall {...args} />
    <Icon.ChevronDownSmall {...args} />
    <Icon.UpSmall {...args} />
    <Icon.CloseSmall {...args} />
    <h3>Extra Small Icons</h3>

    <Icon.MoreExtraSmall {...args} />

    <Icon.ExpandExtraSmall {...args} />
    <Icon.CollapseExtraSmall {...args} />
  </React.Fragment>
);
export const Default = Template.bind({});
Default.args = {
  height: '30px',
  width: '30px',
  style: { margin: '10px' }
};

export const White = Template.bind({});
White.args = {
  height: '30px',
  width: '30px',
  style: { margin: '10px' },
  color: 'white'
};
White.parameters = {
  backgrounds: { default: 'dark-blue' }
};

// TODO: Add more stories for Card
