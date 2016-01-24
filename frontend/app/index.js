import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import globals from 'styles/globals.css';

import Home from 'components/Home'
import Profile from 'components/Profile'
import PostView from 'components/Post'
import PostNew from 'components/PostNew'
import Navbar from 'components/Navbar'
import Stats from 'components/Stats'


const App = React.createClass({
  render() {
    return (
      <div>
        <Navbar />
        { this.props.children }
      </div>
    )
  }
})

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="profile" component={Profile} />
			<Route path="post" component={PostView} />
			<Route path="new" component={PostNew} />
      <Route path="stats" component={Stats} />
		</Route>
	</Router>
), document.getElementById('root'))
