import React from 'react';

import CSSModules from 'react-css-modules'
import styles from './styles.css'

import Post from './post'
import CommentComponent from './comment'
import { commentListData } from 'config/seeds'

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
