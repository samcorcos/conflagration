import React from 'react';

import CSSModules from 'react-css-modules'
import styles from './styles.css'

import Post from './post'
import CommentComponent from './comment'

let commentData = [{
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
}]

let commentList = commentData.map(function(comment) {
  return (
    <CommentComponent
      key={comment.id}
      upvotes={comment.upvotes}
      author={comment.author}
      body={comment.body}
    />
  )
})

const PostView = React.createClass({
  render() {
    return (
      <div>
        <section className={ styles.contentWrapper }>
          <div className={ styles.content }>
            <Post />
          </div>
        </section>
        <section className={ styles.contentWrapper }>
          <div className={ styles.comments }>
            { commentList }
          </div>
        </section>
      </div>
    )
  }
});

export default CSSModules(PostView, styles);
