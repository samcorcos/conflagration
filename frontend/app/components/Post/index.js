import React from 'react';

import CSSModules from 'react-css-modules'
import styles from './style.css'

import Post from './post'
import Comments from './comments'

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
            <Comments />
          </div>
        </section>
      </div>
    )
  }
});

export default CSSModules(PostView, styles);
