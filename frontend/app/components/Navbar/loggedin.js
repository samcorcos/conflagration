import React from 'react'
import { Link } from 'react-router'

import CSSModules from 'react-css-modules'
import styles from './styles.css'

const LoggedIn = React.createClass({
  render() {
    return (
      <ul className={ styles.navbarItem }>
        <li>
          <div className={ styles.newsfeed }>
            Newsfeed
          </div>
        </li>
        <li>
          <Link to="profile">
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
          </Link>
        </li>
      </ul>
    )
  }
})

export default CSSModules(LoggedIn, styles)
