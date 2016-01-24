import React from 'react'
import { Link } from 'react-router'

import CSSModules from 'react-css-modules'
import styles from './styles.css'

var data = {

}


const UserData = React.createClass({
  render() {
    return (
      <Link to='stats'>
        <section className={ styles.userData }>
            <div className={ styles.aggregatedData }>
              <div className={ styles.statistic }>
                <h3>Total posts</h3>
                <p>12</p>
              </div>
              <div className={ styles.statistic }>
                <h3>Total comments</h3>
                <p>41</p>
              </div>
              <div className={ styles.statistic }>
                <h3>Total impressions</h3>
                <p>45,043</p>
              </div>
              <div className={ styles.statistic }>
                <h3>Total clicks</h3>
                <p>1,101</p>
              </div>
            </div>
        </section>
      </Link>
    )
  }
})

export default CSSModules(UserData, styles)
