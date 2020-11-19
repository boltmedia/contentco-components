// Generated with util/create-component.js
import React from 'react';
import Icon from './Icon';

export default {
  title: 'Icons/Admin',
  component: Icon
};

const Template = (args) => (
  <React.Fragment>
    <h3>Icons to move to frontend</h3>
    <Icon.External {...args} />
    <Icon.Drag {...args} />
    <Icon.Edit {...args} />
    <Icon.Preview {...args} />
    <Icon.Profile {...args} />
    <Icon.Search {...args} />
    <Icon.Xero {...args} />
    <Icon.Refresh {...args} />
    <Icon.Play {...args} />
    <Icon.Stop {...args} />
    <Icon.Invoice {...args} />
    <Icon.Filter {...args} />
    <Icon.Split {...args} />
    <Icon.BinSmall {...args} />

    <h3>Icons to remove - Use Frontend version instead</h3>
    <Icon.Paperclip {...args} />
    <Icon.SplitSmall {...args} />

    <Icon.Add {...args} />
    <Icon.Close {...args} />
    <Icon.Logout {...args} />
    <Icon.Home {...args} />
    <Icon.Talent {...args} />
    <Icon.Brief {...args} />
    <Icon.Down {...args} />
    <Icon.More {...args} />
    <Icon.User {...args} />
    <Icon.Email {...args} />
    <Icon.Folder {...args} />

    <Icon.Minimize {...args} />
    <Icon.Company {...args} />

    <Icon.Timesheet {...args} />

    <Icon.MoreExtraSmall {...args} />

    <Icon.ExpandExtraSmall {...args} />
    <Icon.CollapseExtraSmall {...args} />
    <Icon.ChevronDownSmall {...args} />
    <Icon.UpSmall {...args} />
    <Icon.CloseSmall {...args} />
    <Icon.EditSmall {...args} />

    <Icon.MinimizeSmall {...args} />
    <Icon.Stretch {...args} />
    <Icon.Shrink {...args} />
    <Icon.ChevronLeft {...args} />
    <Icon.ChevronRight {...args} />
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
