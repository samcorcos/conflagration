import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './comment.css'

/* How to use Comment component:

  <CommentComponent
    key={id} // this is not strictly necessary
    upvotes={upvotes}
    author={author} // must username, profile (image), and points
    body={body}
  />

*/

const CommentComponent = React.createClass({
  render() {
    return (
      <div className={ styles.comment }>
        <div className={ styles.row }>
          <div className={ styles.voting }>
            <div className={ styles.arrowUp }></div>
            <div className={ styles.votes }>{ this.props.upvotes }</div>
            <div className={ styles.arrowDown }></div>
          </div>
          <div className={ styles.profileImage }>
            <div className={ styles.profilePlaceholder }></div>
          </div>
          <div className={ styles.profileDetails }>
            <div>
              <h3>{ this.props.author.username }</h3>
            </div>
            <div className={ styles.pointsBadge }>
              <span> { this.props.author.points } </span>
              <span> Badge </span>
            </div>
          </div>
          <div className={ styles.reply }>
            <a href="#">reply</a>
          </div>
        </div>
        <div className={ styles.row }>
          <p className={ styles.commentBody }>
            { this.props.body }
          </p>
        </div>
      </div>
    )
  }
})

export default CSSModules(CommentComponent, styles)
