import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './style.css';

const Home = React.createClass({
  render() {
    let posts = [
      {
        profile: "url",
        upvotes: Math.floor(Math.random() * 100),
        thumbnail: "url",
        title: "This is the title of the post!",
        author: "Bobby Tables",
        timestamp: (new Date).getTime(),
        comments: Math.floor(Math.random() * 10),
        id: "1"
      },
      {
        profile: "url",
        upvotes: Math.floor(Math.random() * 100),
        thumbnail: "url",
        title: "This is the title of the post!",
        author: "Bobby Tables",
        timestamp: (new Date).getTime(),
        comments: Math.floor(Math.random() * 10),
        id: "2"
      },
      {
        profile: "url",
        upvotes: Math.floor(Math.random() * 100),
        thumbnail: "url",
        title: "This is the title of the post!",
        author: "Bobby Tables",
        timestamp: (new Date).getTime(),
        comments: Math.floor(Math.random() * 10),
        id: "3"
      }
    ]

    let list = posts.map((post) => {
      return (
        <li className={ styles.post } key={ post.id }>
          <div className={ styles.profile }>
            <div className={ styles.profilePlaceholder }></div>
          </div>
          <div className={ styles.voting }>
            <div className={ styles.arrowUp }></div>
            <div>{ post.upvotes }</div>
            <div className={ styles.arrowDown }></div>
          </div>
          <div className={ styles.thumbnail }>
            <div className={ styles.thumbnailPlaceholder }></div>
          </div>
          <div className={ styles.postDetails }>
            <h3><a href="#" className={ styles.postTitle }>{ post.title }</a></h3>
            <p className={ styles.postSubheader }>Submitted by <strong><a href="#">{ post.author }</a></strong> { post.timestamp } milliseconds ago.</p>
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
