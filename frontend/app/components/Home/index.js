import React from 'react';
import { Link } from 'react-router'

import CSSModules from 'react-css-modules';
import styles from './styles.css';

import Post from './post'

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


const Home = React.createClass({
  render() {
    return (
      <div className={ styles.contentWrapper }>
        <div className={ styles.content }>
          <section className={ styles.postsList }>
            <ul>
              { postsData.map(function(post) {
                return (
                  <Post
                    key={post.id}
                    upvotes={post.upvotes}
                    title={post.title}
                    author={post.author}
                    timestamp={post.timestamp}
                    comments={post.comments}
                    />
                )
              })
            }
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
