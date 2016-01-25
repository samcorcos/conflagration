import React from 'react'
import { Link } from 'react-router'

import CSSModules from 'react-css-modules'
import styles from './styles.css'

import PostComponent from 'components/Home/post'
import CommentComponent from 'components/Post/comment'
import { postListData, commentListData } from 'config/seeds'

let postList = postListData.map(function(post) {
  return (
    <PostComponent
      key={post.id} // this is not strictly necessary
      upvotes={post.upvotes}
      thumbnail={post.thumbnail}
      title={post.title}
      author={post.author} // must have "username" and "profile" for image
      timestamp={post.timestamp}
      comments={post.comments} // this is the comment count
    />
  )
})

let commentList = commentListData.map(function(comment) {
  return (
    <CommentComponent
      key={comment.id}
      upvotes={comment.upvotes}
      author={comment.author}
      body={comment.body}
    />
  )
})

let upvotesData = []

let upvoteList;
if (upvotesData.length === 0) {
  upvoteList = <div className={ styles.noUpvotes }>No upvotes yet!</div>
}

const UserFeed = React.createClass({
  // TODO move this from local state
  getInitialState() {
    return {
      feed: "posts"
    }
  },
  handleChange(feed) {
    this.setState({
      feed: feed
    })
  },
  render() {
    return (
      <section className={ styles.userFeed }>
        <div className={ styles.titleRow }>
          <h2
            onClick={this.handleChange.bind(null, "posts")}
            className={ this.state.feed === "posts" ? styles.feedTitleActive : styles.feedTitle }>Posts</h2>
          <h2
            onClick={this.handleChange.bind(null, "comments")}
            className={ this.state.feed === "comments" ? styles.feedTitleActive : styles.feedTitle }>Comments</h2>
          <h2
            onClick={this.handleChange.bind(null, "upvotes")}
            className={ this.state.feed === "upvotes" ? styles.feedTitleActive : styles.feedTitle }>Upvotes</h2>
        </div>
        <div className={ styles.feedList }>
          { this.state.feed === "posts" ? postList : null }
          { this.state.feed === "comments" ? commentList : null }
          { this.state.feed === "upvotes" ? upvoteList : null}
        </div>
      </section>
    )
  }
})

export default CSSModules(UserFeed, styles)
