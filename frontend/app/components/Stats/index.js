import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './styles.css'

import { VictoryChart, VictoryLine, VictoryBar } from 'victory'

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
          <VictoryChart
            height={this.state.height} width={this.state.width}>
            <VictoryBar
              domain={
                {x: [0, 7], y: [0, 10]}
              }
              data={[
                {x: 1, y: 1},
                {x: 2, y: 2},
                {x: 3, y: 3},
                {x: 4, y: 2},
                {x: 5, y: 1},
                {x: 6, y: 5},
                {x: 7, y: 9}
              ]}
            />
          </VictoryChart>
        </div>
        <div>
          <h2>Points</h2>
          <VictoryChart
            height={this.state.height} width={this.state.width}>
            <VictoryLine
              data={[
                { y: 25, x: 1 },
                { y: 30, x: 2 },
                { y: 60, x: 3 },
                { y: 65, x: 4 },
                { y: 65, x: 5 },
                { y: 65, x: 6 },
                { y: 80, x: 7 }
              ]} />
          </VictoryChart>
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
