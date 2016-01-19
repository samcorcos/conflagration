import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './styles.css'

const loggedIn = (
  <ul className={ styles.navbarItem }>
    <li>
      Newsfeed
    </li>
    <li>
      Profile
    </li>
  </ul>
)

const loggedOut = (
  <ul className={ styles.navbarItem }>
    <li>
      Log in
    </li>
    <li>
      Sign up
    </li>
  </ul>
)

const Navbar = React.createClass({
  render() {
    let loginStatus = false
    return (
      <div className={ styles.navbar }>
        <div className={ styles.logo }>
          Conflagration.io
        </div>
        <div>
          <ul className={ styles.navbarItem }>
            <li>Search</li>
            <li>Filter</li>
          </ul>
        </div>
        <div>
          { loginStatus ? loggedIn : loggedOut}
        </div>
      </div>
    )
  }
})

export default CSSModules(Navbar, styles)
