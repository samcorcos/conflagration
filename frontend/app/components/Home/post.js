import React from 'react'
import { Link } from 'react-router'

import CSSModules from 'react-css-modules'
import styles from './styles.css'


/*  How to use Post component:

  <PostComponent
    key={id} // this is not strictly necessary
    upvotes={upvotes}
    thumbnail={thumbnail}
    title={title}
    author={author} // must have "username" and "profile" for image
    timestamp={timestamp}
    comments={comments} // this is the comment count
  />

*/


const PostComponent = React.createClass({
  render() {
    return (
      <li className={ styles.post }>
        <div className={ styles.profile }>
          <div className={ styles.profilePlaceholder }></div>
        </div>
        <div className={ styles.voting }>
          <div className={ styles.arrowUp }></div>
          <div className={ styles.votes }>{ this.props.upvotes }</div>
          <div className={ styles.arrowDown }></div>
        </div>
        <div className={ styles.thumbnail }>
          <div className={ styles.thumbnailPlaceholder }></div>
        </div>
        <div className={ styles.postDetails }>
          <h3><Link to="post" className={ styles.postTitle }>{ this.props.title }</Link></h3>
          <p className={ styles.postSubheader }>
            Submitted by <strong><a href="#">{ this.props.author.username }</a></strong> { this.props.timestamp } milliseconds ago.
          </p>
          <p className={ styles.postSubheader }><a href="#">{ this.props.comments } comments</a> | <a href="#">share</a></p>
        </div>
      </li>
    )
  }
})

export default CSSModules(PostComponent, styles)
