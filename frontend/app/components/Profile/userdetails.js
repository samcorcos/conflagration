import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './styles.css'

let user = {
  username: "Sam Corcos",
  contact: "sam@learnphoenix.io",
  social: [
    { platform: "twitter", link: "twitter.com/samcorcos" },
    { platform: "google", link: "twitter.com/samcorcos" },
    { platform: "facebook", link: "twitter.com/samcorcos" }
  ],
  badge: "admin"
}

let socialList = user.social.map(function(item) {
  return (
    <div key={ item.platform } className={ styles.socialPlaceholder }></div>
  )
})

const UserDetails = React.createClass({
  render() {
    return (
      <section className={ styles.profile }>
        <div className={ styles.profileImage }>
          <div className={ styles.profilePlaceholderLarge }></div>
        </div>
        <div className={ styles.profileDetails }>
          <div className={ styles.username }>
            { user.username }
          </div>
          <div className={ styles.contact }>
            { user.contact }
          </div>
          <div className={ styles.social }>
            { socialList }
          </div>
          <div>
            <button className={ styles.follow }>Follow</button>
          </div>
        </div>
        <div className={ styles.profileScore }>
          <div className={ styles.score }>
            100,000
          </div>
          <div className={ styles.badges }>
            { user.badge }
          </div>
        </div>
      </section>
    )
  }
})

export default CSSModules(UserDetails, styles)
