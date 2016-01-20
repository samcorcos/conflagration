import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './styles.css'

const loggedIn = (
  <ul className={ styles.navbarItem }>
    <li>
      <div className={ styles.newsfeed }>
        Newsfeed
      </div>
    </li>
    <li>
      <div className={ styles.profile }>
        <div className={ styles.row }>
          sam@learnphoenix.io
        </div>
        <div className={ styles.row }>
          <div>
            1200
          </div>
          <div>
            ∞
          </div>
        </div>
      </div>
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
    let loginStatus = true
    return (
      <div className={ styles.navbar }>
        <div className={ styles.logo }>
          <h1>Conflagration.io</h1>
          <p>The unofficial news source</p>
          <p>of the Phoenix framework.</p>
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
