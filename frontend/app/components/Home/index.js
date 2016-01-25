import React from 'react';
import { Link } from 'react-router'

import CSSModules from 'react-css-modules';
import styles from './styles.css';

import Post from './post'
import { postListData } from 'config/seeds.js'

const Home = React.createClass({
  render() {
    return (
      <div className={ styles.contentWrapper }>
        <div className={ styles.content }>
          <section className={ styles.postsList }>
            <ul>
              { postListData.map(function(post) {
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
