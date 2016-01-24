import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './styles.css'

import PostComponent from 'components/Home/post'

let postData = {
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
      <div>
        <PostComponent
          upvotes={postData.upvotes}
          thumbnail={postData.thumbnail}
          title={postData.title}
          author={postData.author} // must have "username" and "profile" for image
          timestamp={postData.timestamp}
          comments={postData.comments} // this is the comment count
        />
        <div className={styles.postBody }>
          { postData.body }
        </div>
      </div>
    )
  }
})

export default CSSModules(Post, styles)
