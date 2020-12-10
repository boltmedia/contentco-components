import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import convert from 'htmr';
import { useRouter } from 'next/router';
import Cookies from 'universal-cookie';
import Styles from './Announcement.scss';
import { messages } from './data';

function Announcement({ className, ...props }) {
  const cookieName = 'cc-read-announcements';
  const router = useRouter();
  const [message, setMessage] = useState(null);
  const cookies = new Cookies();

  useEffect(() => {
    const read = cookies.get(cookieName) || [];
    for (let i = 0; i < messages.length; i++) {
      const msgObj = messages[i];
      if (!read.includes(msgObj.id)) setMessage(msgObj);
    }
  });

  // Custom override
  /*    if (router.query.custom_message) {
      setMessage({
        message: router.query.custom_message
      });
    }
    // useEffect with followed by an empty array will only load on mount/unmount
    // useEffect folloed by a var will only load when that var changes
  }, [router]); */

  const closeAnnouncement = (name) => {
    if (name) {
      const read = cookies.get(cookieName) || [];
      read.push(name);
      cookies.set(cookieName, read);
    }
    router.push(router.asPath);
    setMessage(null);
  };

  return (
    (message && (
      <div className={classNames(Styles.container, className)}>
        <div className={Styles.text}>
          <p className={Styles.content}>
            {convert(message.message || router.query.custom_message)}
          </p>
        </div>
        <div className={Styles.close}>
          <span
            className={Styles.closeButton}
            onClick={() => closeAnnouncement(message.id)}
          >
            &#10005;
          </span>
        </div>
      </div>
    )) ||
    null
  );
}

Announcement.propTypes = {
  announcement: PropTypes.arrayOf(PropTypes.object),
  closeAnnouncement: PropTypes.func,
  className: PropTypes.string
};

export default Announcement;
