import React from 'react'
import { Link } from 'react-router'

import CSSModules from 'react-css-modules'
import styles from './styles.css'

import PostComponent from 'components/Home/post'

let posts = [
  { thumbnail: "url", title: "This is the title of the first post.", votes: 29},
  { thumbnail: "url", title: "Files are interesting", votes: 42},
  { thumbnail: "url", title: "I wonder where the images will be stored", votes: 54},
  { thumbnail: "url", title: "Four posts should be enough", votes: 2}
]

let comments = [

]

let upvotes = [

]

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

      </section>
    )
  }
})

export default CSSModules(UserFeed, styles)
