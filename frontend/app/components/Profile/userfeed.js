import React from 'react'
import { Link } from 'react-router'

import CSSModules from 'react-css-modules'
import styles from './styles.css'

let posts = [
  
]

let comments = [

]

let upvotes = [

]

const UserFeed = React.createClass({
  render() {
    return (
      <section className={ styles.userFeed }>
        user feed
      </section>
    )
  }
})

export default CSSModules(UserFeed, styles)
