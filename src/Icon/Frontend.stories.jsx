// Generated with util/create-component.js
import React from 'react';
import Frontend from './Frontend';

export default {
  title: 'Icons/Frontend',
  component: Frontend
};

const Template = (args) => (
  <React.Fragment>
    <h3>File Types</h3>
    <Frontend.Audio {...args} />
    <Frontend.Excel {...args} />
    <Frontend.Word {...args} />
    <Frontend.Pdf {...args} />
    <Frontend.Text {...args} />

    <Frontend.File {...args} />
    <Frontend.Picture {...args} />

    <h3>Chat</h3>
    <Frontend.Attachment {...args} />
    <Frontend.Expand {...args} />
    <Frontend.Minimize {...args} />

    <h3>Main Sections</h3>
    <Frontend.Dashboard {...args} />
    <Frontend.Brief {...args} />
    <Frontend.ChatUsers {...args} />
    <Frontend.Company {...args} />
    <Frontend.Chat {...args} />
    <Frontend.Settings {...args} />
    <Frontend.Intercom {...args} />
    <Frontend.Talent {...args} />
    <Frontend.Project {...args} />
    <Frontend.Timesheet {...args} />
    <Frontend.Guide {...args} />

    <h3>Social</h3>
    <Frontend.Google {...args} />
    <Frontend.Facebook {...args} />
    <Frontend.Twitter {...args} />
    <Frontend.Linkedin {...args} />
    <Frontend.Instagram {...args} />
    <Frontend.Youtube {...args} />

    <h3>Brief</h3>
    <Frontend.Email {...args} />
    <Frontend.Phone {...args} />
    <Frontend.Chat {...args} />
    <h3>Other</h3>
    <Frontend.Activity {...args} />
    <Frontend.Add {...args} />
    <Frontend.Assessment {...args} />
    <Frontend.Caret {...args} />
    <Frontend.Close {...args} />
    <Frontend.Down {...args} />

    <Frontend.More {...args} />
    <Frontend.MoreVertical {...args} />

    <h3>Not Reviewed</h3>

    <Frontend.Location {...args} />
    <Frontend.Globe {...args} />
    <Frontend.Search {...args} />
    <Frontend.Note {...args} />
    <Frontend.Org {...args} />
    <Frontend.Skill {...args} />
    <Frontend.Profile {...args} />
    <Frontend.Profile2 {...args} />
    <Frontend.Quote {...args} />
    <Frontend.Reference {...args} />
    <Frontend.Question {...args} />
    <Frontend.Link {...args} />
    <Frontend.Pencil {...args} />
    <Frontend.StarEmpty {...args} />
    <Frontend.StarFull {...args} />
    <Frontend.External {...args} />
    <Frontend.Wallet {...args} />
    <Frontend.Help {...args} />
    <Frontend.Notification {...args} />
    <Frontend.Ok {...args} />
    <Frontend.Menu {...args} />
    <Frontend.Logout {...args} />
  </React.Fragment>
);
export const Default = Template.bind({});
Default.args = {
  height: '20px',
  width: '20px',
  style: { margin: '10px' }
};

export const White = Template.bind({});
White.args = {
  height: '20px',
  width: '20px',
  style: { margin: '10px' },
  color: 'white'
};
White.parameters = {
  backgrounds: { default: 'dark-blue' }
};

// TODO: Add more stories for Card
