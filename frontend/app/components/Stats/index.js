import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './styles.css'

import Chart from './chart'

const Stats = React.createClass({
  getInitialState() {
    return {
      height: 300,
      width: (window.innerWidth * 0.9)
    }
  },
  handleResize: function(e) {
    this.setState({ width: (window.innerWidth * 0.9) });
  },
  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);
  },
  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
  },
  render() {
    return (
      <section className={ styles.stats }>
        <div>
          <h2>Views and clicks</h2>
          <Chart height={this.state.height} width={this.state.width} />
        </div>
        <div>
          <h2>Points</h2>
          <div>linechart goes here</div>
        </div>
        <div>
          <h2>Another cool chart</h2>
          <div>Some corresponding chart</div>
        </div>
      </section>
    )
  }
})

export default CSSModules(Stats, styles)
