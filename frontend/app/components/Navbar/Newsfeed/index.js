import React from 'react'
import { Link } from 'react-router'

import CSSModules from 'react-css-modules'
import styles from './styles.css'

// TODO remove hardcoded data
let newsfeedData = [

]

const Newsfeed = React.createClass({
  render() {
    return (
      <div onClick={this.props.handleNewsfeedDropdown} className={ this.props.newsfeedDropdown ? styles.newsfeedToggled : styles.newsfeed }>
        <div>
          Newsfeed
        </div>
        <div className={ this.props.newsfeedDropdown ? styles.newsfeedDropdown : styles.hidden }>
          content
        </div>

      </div>

    )
  }
})

export default CSSModules(Newsfeed, styles)
