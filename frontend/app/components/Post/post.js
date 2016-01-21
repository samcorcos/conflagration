import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './styles.css'

let postData = {
  profile: "url",
  upvotes: Math.floor(Math.random() * 100),
  thumbnail: "url",
  title: "This is the title of the post!",
  author: {
    profile: "url",
    username: "Bobby Tables"
  },
  timestamp: (new Date).getTime(),
  comments: Math.floor(Math.random() * 10),
  body: "This is the body of the post. Not every post will have stuff written here. It's entirely up to the author. Sometimes people might want to go on a long rant here and maybe explain some of what is going on in the link they provided. There are plenty of reasons to want to add content here.",
  id: "1"
}

// there will only be one post
const Post = React.createClass({
  render() {
    return (
      <div key={ postData.id }>
        <div className={ styles.post }>
          <div className={ styles.profile }>
            <div className={ styles.profilePlaceholder }></div>
          </div>
          <div className={ styles.voting }>
            <div className={ styles.arrowUp }></div>
            <div>{ postData.upvotes }</div>
            <div className={ styles.arrowDown }></div>
          </div>
          <div className={ styles.thumbnail }>
            <div className={ styles.thumbnailPlaceholder }></div>
          </div>
          <div className={ styles.postDetails }>
            <h3><a href="#" className={ styles.postTitle }>{ postData.title }</a></h3>
            <p className={ styles.postSubheader }>Submitted by <strong><a href="#">{ postData.author.username }</a></strong> { postData.timestamp } milliseconds ago.</p>
            <p className={ styles.postSubheader }><a href="#">{ postData.comments } comments</a> | <a href="#">share</a></p>
          </div>
        </div>
        <div className={styles.postBody }>
          { postData.body }
        </div>
      </div>
    )
  }
})

export default CSSModules(Post, styles)
