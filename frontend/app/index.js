import React from 'react'
import ReactDOM from 'react-dom'

const HelloWorld = React.createClass({
  render() {
    return <div>Hello World!</div>
  }
})

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('root')
)
