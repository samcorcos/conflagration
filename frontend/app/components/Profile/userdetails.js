import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './styles.css'

import { userData } from 'config/seeds.js'



let socialList = userData.social.map(function(item) {
  return (
    <div key={ item.platform } className={ styles.socialPlaceholder }></div>
  )
})

const UserDetails = React.createClass({
  render() {
    // TODO this is a placeholder to test follow button
    let following = false
    return (
      <section className={ styles.profile }>
        <div className={ styles.profileImage }>
          <div className={ styles.profilePlaceholderLarge }></div>
        </div>
        <div className={ styles.profileDetails }>
          <div className={ styles.username }>
            { userData.username }
          </div>
          <div className={ styles.contact }>
            { userData.contact }
          </div>
          <div className={ styles.social }>
            { socialList }
          </div>
          <div>
            { following ? <button className={ styles.btnDisabled }>Following</button> : <button className={ styles.follow }>Follow</button>}
          </div>
        </div>
        <div className={ styles.profileScore }>
          <div className={ styles.score }>
            100,000
          </div>
          <div className={ styles.badges }>
            { userData.badge }
          </div>
        </div>
      </section>
    )
  }
})

export default CSSModules(UserDetails, styles)
