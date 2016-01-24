import React from 'react';
import { Link } from 'react-router'

import CSSModules from 'react-css-modules';
import styles from './styles.css';

const Home = React.createClass({
  render() {

    // TODO Limit post title length to 90 characters.
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

    let list = postsData.map((post) => {
      return (
        <li className={ styles.post } key={ post.id }>
          <div className={ styles.profile }>
            <div className={ styles.profilePlaceholder }></div>
          </div>
          <div className={ styles.voting }>
            <div className={ styles.arrowUp }></div>
            <div className={ styles.votes }>{ post.upvotes }</div>
            <div className={ styles.arrowDown }></div>
          </div>
          <div className={ styles.thumbnail }>
            <div className={ styles.thumbnailPlaceholder }></div>
          </div>
          <div className={ styles.postDetails }>
            <h3><Link to="post" className={ styles.postTitle }>{ post.title }</Link></h3>
            <p className={ styles.postSubheader }>Submitted by <strong><a href="#">{ post.author.username }</a></strong> { post.timestamp } milliseconds ago.</p>
            <p className={ styles.postSubheader }><a href="#">{ post.comments } comments</a> | <a href="#">share</a></p>
          </div>
        </li>
      )
    })



    return (
      <div className={ styles.contentWrapper }>
        <div className={ styles.content }>
          <section className={ styles.postsList }>
            <ul>
              { list }
            </ul>
          </section>

          <section className={ styles.ads }>
            <ul>
              <li>
                <div className={ styles.adPlaceholder }></div>
              </li>
              <li>
                <div className={ styles.adPlaceholder }></div>
              </li>
              <li>
                <div className={ styles.adPlaceholder }></div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    )
  }
});

export default CSSModules(Home, styles);
