// Generated with util/create-component.js
import React from 'react';
import Icon from './Icon';
import classNames from 'classnames';
import Styles from './Icon.module.scss';
export default {
  title: 'Icon',
  component: Icon
};

const renderIcon = (arr, args) => {
  return arr.map((key) => {
    const IconComponent = Icon[key];
    return (
      <span className={classNames(Styles.icon)} key={key}>
        <IconComponent {...args} />
        <span className='icon-name'>{key}</span>
      </span>
    );
  });
};

const Template = (args) => (
  <React.Fragment>
    <h3>General</h3>
    <div className={classNames(Styles.wrapper)}>
      {renderIcon(
        [
          'Drag',
          'Refresh',
          'Play',
          'Stop',
          'Download',
          'Xero',
          'Filter',
          'Split',
          'Filter',
          'Split'
        ],
        args
      )}
    </div>

    <h3>File Types</h3>
    <div className={classNames(Styles.wrapper)}>
      {renderIcon(
        [
          'Audio',
          'Excel',
          'Word',
          'Pdf',
          'Text',
          'File',
          'Picture',
          'Reference'
        ],
        args
      )}
    </div>

    <h3>Chat</h3>
    <div className={classNames(Styles.wrapper)}>
      {renderIcon(['Attachment', 'Expand', 'Minimize'], args)}
    </div>

    <h3>Navigation</h3>
    <div className={classNames(Styles.wrapper)}>
      {renderIcon(
        [
          'Dashboard',
          'Brief',
          'ChatUsers',
          'Company',
          'Chat',
          'Settings',
          'Question',
          'Talent',
          'Project',
          'Timesheet',
          'Guide',
          'Notification',
          'Profile',
          'Invoice'
        ],
        args
      )}
    </div>

    <h3>Social</h3>
    <div className={classNames(Styles.wrapper)}>
      {renderIcon(
        ['Google', 'Facebook', 'Twitter', 'Linkedin', 'Instagram', 'Youtube'],
        args
      )}
    </div>

    <h3>Brief</h3>

    <div className={classNames(Styles.wrapper)}>
      {renderIcon(['Email', 'Phone', 'Chat', 'Skill'], args)}
    </div>

    <h3>Other</h3>
    <div className={classNames(Styles.wrapper)}>
    {renderIcon(
      [
        'Activity',
        'Add',
        'Assessment',
        'Caret',
        'Close',
        'Down',
        'Menu',
        'More',
        'MoreVertical',
        'StarEmpty',
        'StarFull',
        'Logout',
        'Search',
        'Link',
        'Edit',
        'External',
        'Ok'
      ],
      args
    )}
    </div>
  </React.Fragment>
);
export const Default = Template.bind({});
Default.args = {
  style: { height: '20px', width: '20px', margin: '10px' },
  label:'google'
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
