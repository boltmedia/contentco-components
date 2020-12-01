// Generated with util/create-component.js
import React from 'react';
import Icon from './Icon';

export default {
  title: 'Icon',
  component: Icon
};

const Template = (args) => (
  <React.Fragment>
    <h3>General</h3>
    <Icon.Drag {...args} />
    <Icon.Refresh {...args} />
    <Icon.Preview {...args} />
    <Icon.Play {...args} />
    <Icon.Stop {...args} />
    <Icon.Download {...args} />

    <Icon.Xero {...args} style={{ ...args.style, width: '64px' }} />
    <Icon.Filter {...args} />
    <Icon.Split {...args} />

    <h3>File Types</h3>
    <Icon.Audio {...args} />
    <Icon.Excel {...args} />
    <Icon.Word {...args} />
    <Icon.Pdf {...args} />
    <Icon.Text {...args} />
    <Icon.File {...args} />
    <Icon.Picture {...args} />
    <Icon.Reference {...args} />

    <h3>Chat</h3>
    <Icon.Attachment {...args} />
    <Icon.Expand {...args} />
    <Icon.Minimize {...args} />

    <h3>Navigation</h3>
    <Icon.Dashboard {...args} />
    <Icon.Brief {...args} />
    <Icon.ChatUsers {...args} />
    <Icon.Company {...args} />
    <Icon.Chat {...args} />
    <Icon.Settings {...args} />
    <Icon.Question {...args} />
    <Icon.Talent {...args} />
    <Icon.Project {...args} />
    <Icon.Timesheet {...args} />
    <Icon.Guide {...args} />
    <Icon.Notification {...args} />
    <Icon.Profile {...args} />
    <Icon.Invoice {...args} />

    <h3>Social</h3>
    <Icon.Google {...args} />
    <Icon.Facebook {...args} />
    <Icon.Twitter {...args} />
    <Icon.Linkedin {...args} />
    <Icon.Instagram {...args} />
    <Icon.Youtube {...args} />

    <h3>Brief</h3>
    <Icon.Email {...args} />
    <Icon.Phone {...args} />
    <Icon.Chat {...args} />
    <Icon.Skill {...args} />

    <h3>Other</h3>

    <Icon.Activity {...args} />
    <Icon.Add {...args} />
    <Icon.Assessment {...args} />
    <Icon.Caret {...args} />
    <Icon.Close {...args} />
    <Icon.Down {...args} />
    <Icon.More {...args} />
    <Icon.MoreVertical {...args} />
    <Icon.StarEmpty {...args} />
    <Icon.StarFull {...args} />
    <Icon.Logout {...args} />
    <Icon.Search {...args} />
    <Icon.Link {...args} />
    <Icon.Edit {...args} />
    <Icon.External {...args} />
    <Icon.Ok {...args} />
  </React.Fragment>
);
export const Default = Template.bind({});
Default.args = {
  style: { height: '20px', width: '20px', margin: '10px' }
};

export const White = Template.bind({});
White.args = {
  style: { height: '20px', width: '20px', margin: '10px' },
  color: 'white'
};
White.parameters = {
  backgrounds: { default: 'dark-blue' }
};

// TODO: Add more stories for Card
