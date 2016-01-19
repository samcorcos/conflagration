import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './comment.css'

// TODO figure out how to link and nest posts...
// both visually and in the data.

let commentData = {
  author: {
    profile: "url",
    username: "Bobby Tables",
    points: Math.floor(Math.random() * 1000),
    badge: "url"
  },
  upvotes: Math.floor(Math.random() * 100),
  timestamp: (new Date).getTime(),
  body: "This is the body of the post. Not every post will have stuff written here. It's entirely up to the author. Sometimes people might want to go on a long rant here and maybe explain some of what is going on in the link they provided. There are plenty of reasons to want to add content here.",
  id: "1"
}
// TODO there will be many comments, and they can be nested...
// but how to handle lots of nesting?


const Comments = React.createClass({
  render() {
    return (
      <div>
        <div className={ styles.row }>
          <div className={ styles.voting }>
            <div className={ styles.arrowUp }></div>
            <div>{ commentData.upvotes }</div>
            <div className={ styles.arrowDown }></div>
          </div>
          <div className={ styles.profileImage }>
            <div className={ styles.profilePlaceholder }></div>
          </div>
          <div className={ styles.profileDetails }>
            <div>
              <h3>{ commentData.author.username }</h3>
            </div>
            <div>
              <span> { commentData.author.points }pts </span>
              <span> Badge </span>
            </div>
          </div>
          <div className={ styles.reply }>
            <a href="#">reply</a>
          </div>
        </div>
        <div className={ styles.row }>
          <p className={ styles.commentBody }>
            { commentData.body }
          </p>
        </div>
      </div>
    )
  }
})

export default CSSModules(Comments, styles)
