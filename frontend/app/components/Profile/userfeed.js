import React from 'react'
import { Link } from 'react-router'

import CSSModules from 'react-css-modules'
import styles from './styles.css'

import PostComponent from 'components/Home/post'
import CommentComponent from 'components/Post/comment'

let postsData = [
  {
    upvotes: Math.floor(Math.random() * 100),
    thumbnail: "url",
    title: "This is the title of the post!",
    author: {
      username: "Bobby Tables",
      profile: "url"
    },
    timestamp: (new Date).getTime(),
    comments: Math.floor(Math.random() * 10),
    id: "1"
  },
  {
    upvotes: Math.floor(Math.random() * 100),
    thumbnail: "url",
    title: "This is a really long title for a post. How long do we want to allow? We should limit this.",
    author: {
      username: "Bobby Tables",
      profile: "url"
    },
    timestamp: (new Date).getTime(),
    comments: Math.floor(Math.random() * 10),
    id: "2"
  },
  {
    upvotes: Math.floor(Math.random() * 100),
    thumbnail: "url",
    title: "This is the title of the post! this is way too long. i want to see what happens when i write something that goes into the third line",
    author: {
      username: "Bobby Tables",
      profile: "url"
    },
    timestamp: (new Date).getTime(),
    comments: Math.floor(Math.random() * 10),
    id: "3"
  }
]

let postList = postsData.map(function(post) {
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
