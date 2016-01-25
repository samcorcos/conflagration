import React from 'react'
import { Link } from 'react-router'

import CSSModules from 'react-css-modules'
import styles from './styles.css'

import Newsfeed from 'components/Navbar/Newsfeed'

const ProfileDropdown = React.createClass({
  render() {
    return (
      <div onClick={this.props.handleProfileDropdown} className={ this.props.profileDropdown ? styles.profileToggled : styles.profile }>
        <div className={ styles.row }>
          { this.props.currentUser.username }
        </div>
        <div className={ styles.row }>
          <div>
            1200
          </div>
          <div>
            ∞
          </div>
        </div>
        <div className={ this.props.profileDropdown ? styles.profileDropdown : styles.hidden }>
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
    )
  }
})

const LoggedIn = React.createClass({
  // TODO pull out of local state and into redux
  getInitialState() {
    return {
      profileDropdown: false,
      newsfeedDropdown: false
    }
  },
  handleProfileDropdown() {
    this.setState({
      profileDropdown: this.state.profileDropdown ? false : true
    })
  },
  handleNewsfeedDropdown() {
    this.setState({
      newsfeedDropdown: this.state.newsfeedDropdown ? false : true
    })
  },
  logout() {
    console.log("logout")
  },
  render() {
    let test = styles.profile
    console.log(this.props)
    return (
      <ul className={ styles.navbarGroup }>
        <li className={ styles.navbarListItem }>
          <Newsfeed handleNewsfeedDropdown={this.handleNewsfeedDropdown} newsfeedDropdown={this.state.newsfeedDropdown} />
        </li>
        <li className={ styles.navbarListItem }>
          <ProfileDropdown currentUser={this.props.currentUser} handleProfileDropdown={this.handleProfileDropdown} profileDropdown={this.state.profileDropdown} />
        </li>
      </ul>
    )
  }
})

export default CSSModules(LoggedIn, styles)
