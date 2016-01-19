import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './style.css';

console.log(styles);

const Home = React.createClass({
  render() {
    return (
      <div className={ styles.test }>
        Home
      </div>
    )
  }
});

export default CSSModules(Home, styles);
