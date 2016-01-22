import React from 'react'
import { Link } from 'react-router'

import CSSModules from 'react-css-modules'
import styles from './styles.css'

const LoggedIn = React.createClass({
  // TODO pull out of local state and into redux
  getInitialState() {
    return {
      toggled: false
    }
  },
  handleToggle() {
    this.setState({
      toggled: this.state.toggled ? false : true
    })
  },
  logout() {
    console.log("logout")
  },
  render() {
    let test = styles.profile
    return (
      <ul className={ styles.navbarGroup }>
        <li className={ styles.navbarListItem }>
          <div className={ styles.newsfeed }>
            Newsfeed
          </div>
        </li>
        <li className={ styles.navbarListItem }>
          <div onClick={this.handleToggle} className={ this.state.toggled ? styles.profileToggled : styles.profile }>
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
            <div className={ this.state.toggled ? styles.dropdown : styles.hidden }>
              <Link to="new" className={ styles.dropdownItem }>
                New Post
              </Link>
              <Link to="profile" className={ styles.dropdownItem }>
                Profile
              </Link>
              <Link to="stats" className={ styles.dropdownItem }>
                Stats
              </Link>
              <div onClick={this.logout} className={ styles.dropdownItem }>
                Logout
              </div>
            </div>
          </div>
        </li>
      </ul>
    )
  }
})

export default CSSModules(LoggedIn, styles)
