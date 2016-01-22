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
              <ul>
                <li className={ styles.dropdownItem }>
                  New Post
                </li>
                <li className={ styles.dropdownItem }>
                  Profile
                </li>
                <li className={ styles.dropdownItem }>
                  Stats
                </li>
                <li className={ styles.dropdownItem }>
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    )
  }
})

export default CSSModules(LoggedIn, styles)
