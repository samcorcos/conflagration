import React from 'react'
import rd3, { LineChart } from 'react-d3'

import CSSModules from 'react-css-modules'
import styles from './styles.css'

let points = {
  name: "points",
  values: [
    { value: 5, timestamp: "01/20/2016" },
    { value: 10, timestamp: "01/20/2016" },
    { value: 15, timestamp: "01/20/2016" },
    { value: 20, timestamp: "01/20/2016" },
    { value: 25, timestamp: "01/21/2016" },
    { value: 30, timestamp: "01/21/2016" },
    { value: 35, timestamp: "01/21/2016" },
    { value: 30, timestamp: "01/22/2016" },
    { value: 35, timestamp: "01/22/2016" },
    { value: 50, timestamp: "01/23/2016" },
    { value: 60, timestamp: "01/23/2016" },
    { value: 65, timestamp: "01/23/2016" }
  ],
  strokeWidth: 3
}

let views = [
  { timestamp: "Wed, Jan 20 2016 20:09:17 GMT"}
]





const UserData = React.createClass({
  render() {
    return (
      <section className={ styles.userData}>
        <div className={ styles.chart}>
          chart 1
        </div>
        <div className={ styles.chart }>
          chart2
        </div>
        <div className={ styles.chart }>
          chart 3
        </div>
      </section>
    )
  }
})

export default CSSModules(UserData, styles)
