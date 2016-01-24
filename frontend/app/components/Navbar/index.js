import React from 'react'
import { Link } from 'react-router'

import CSSModules from 'react-css-modules'
import styles from './styles.css'

import LoggedIn from './loggedin'
import LoggedOut from './loggedout'

const Navbar = React.createClass({
  render() {
    let loginStatus = false
    return (
      <div className={ styles.navbar }>
        <Link to="/" className={ styles.logo }>
          <h1>Conflagration.io</h1>
          <p>The unofficial news source</p>
          <p>of the Phoenix framework.</p>
        </Link>
        <div>
          <ul className={ styles.navbarGroup }>
            <li className={ styles.navbarListItem }>
              <input className={ styles.search } placeholder="Search" />
            </li>
            <li className={ styles.navbarListItem }>Filter</li>
          </ul>
        </div>
        <div>
          { loginStatus ? <LoggedIn /> : <LoggedOut />}
        </div>
      </div>
    )
  }
})

export default CSSModules(Navbar, styles)
