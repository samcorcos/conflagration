import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './styles.css'

let user = {
  username: "Sam Corcos",
  contact: "sam@learnphoenix.io",
  social: {
    twitter: "@samcorcos",
    facebook: "/samcorcos",
    google: "+samcorcos"
  },
  badges: [
    "admin",
    "superduper"
  ]
}

// TODO map over social icons to create them
// TODO map over badges to create them

const UserDetails = React.createClass({
  render() {
    return (
      <section className={ styles.profile }>
        <div className={ styles.profileImage }>
          <div className={ styles.imagePlaceholder }></div>
        </div>
        <div className={ styles.profileDetails }>
          <div className={ styles.username }>
            { user.username }
          </div>
          <div className={ styles.contact }>
            { user.contact }
          </div>
          <div className={ styles.social }>
            <div className={ styles.socialPlaceholder }></div>
            <div className={ styles.socialPlaceholder }></div>
            <div className={ styles.socialPlaceholder }></div>
          </div>
        </div>
        <div className={ styles.profileScore }>
          <div className={ styles.score }>
            100
          </div>
          <div className={ styles.badges }>
            badge
          </div>
        </div>
      </section>
    )
  }
})

export default CSSModules(UserDetails, styles)
