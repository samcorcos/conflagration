import React from 'react';

import CSSModules from 'react-css-modules'
import styles from './styles.css'

import UserDetails from './userdetails'
import UserData from './userdata'
import UserFeed from './userfeed'

const Profile = React.createClass({
  render() {
    return (
      <div className={ styles.contentWrapper }>
        <div className={ styles.content }>
          <UserDetails />
          <UserData />
          <UserFeed />
        </div>
      </div>
    )
  }
});

export default Profile;
