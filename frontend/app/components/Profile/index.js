import React from 'react';

import CSSModules from 'react-css-modules'
import styles from './styles.css'

import UserDetails from './userdetails'

const Profile = React.createClass({
  render() {
    return (
      <div className={ styles.contentWrapper }>
        <div className={ styles.content }>
          <UserDetails />
        </div>
      </div>
    )
  }
});

export default Profile;
