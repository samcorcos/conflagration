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
                <h3>Statistic</h3>
                <p>140</p>
              </div>
              <div className={ styles.statistic }>
                <h3>Statistic</h3>
                <p>140</p>
              </div>
              <div className={ styles.statistic }>
                <h3>Statistic</h3>
                <p>140</p>
              </div>
              <div className={ styles.statistic }>
                <h3>Statistic</h3>
                <p>140</p>
              </div>
            </div>
        </section>
      </Link>
    )
  }
})

export default CSSModules(UserData, styles)
