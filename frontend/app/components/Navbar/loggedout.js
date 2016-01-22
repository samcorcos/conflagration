import React from 'react'
import { Link } from 'react-router'
import TransitionGroup from 'react-addons-css-transition-group'


import CSSModules from 'react-css-modules'
import styles from './styles.css'

const LoggedOut = React.createClass({
  render() {
    return (
      <div>
        <ul className={ styles.navbarGroup }>
          <li className={ styles.navbarListItem }>
            <div className={ styles.login }>Log in</div>
          </li>
          <li className={ styles.navbarListItem }>
            <Link to="register">
              <button className={ styles.signupButton }>Sign up</button>
            </Link>
          </li>
        </ul>
        <TransitionGroup transitionAppear={ true } transitionName={ styles } transitionAppearTimeout={200} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          <div className={ styles.modalBackground }></div>
        </TransitionGroup>
      </div>
    )
  }
})

export default CSSModules(LoggedOut, styles)
