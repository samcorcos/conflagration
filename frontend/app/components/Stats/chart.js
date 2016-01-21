import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './styles.css'

import { BarChart } from 'react-d3-components'

var data = [{
  label: 'something',
  values: [
    { y: 25, x: "01/21/2016" },
    { y: 30, x: "01/22/2016" },
    { y: 60, x: "01/23/2016" },
    { y: 65, x: "01/24/2016" },
    { y: 65, x: "01/25/2016" },
    { y: 65, x: "01/26/2016" },
    { y: 80, x: "01/27/2016" }
  ]
}]

const Chart = React.createClass({
  render() {
    return (
      <section className={ styles.chartWrapper }>
        <div className={ styles.chart }>
          <BarChart
            data={data}
            width={this.props.width}
            height={this.props.height}
            margin={{top: 10, bottom: 50, left: 50, right: 10}}
          />
        </div>
      </section>
    )
  }
})

export default CSSModules(Chart, styles)
