import React from 'react';

import CSSModules from 'react-css-modules'
import styles from './styles.css'

const PostNew = React.createClass({
  render() {
    return (
      <section className={ styles.postWrapper }>
        <div className={ styles.post }>
          test
        </div>
      </section>
    )
  }
});

export default PostNew;
