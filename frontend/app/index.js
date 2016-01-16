import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Home from './components/Home'
import Profile from './components/Profile'
import Post from './components/Post'
import PostNew from './components/PostNew'
import UserLogin from './components/UserLogin'
import UserRegister from './components/UserRegister'


const App = React.createClass({
  render() {
    return <div> { this.props.children } </div>
  }
})

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="profile" component={Profile} />
			<Route path="post" component={Post} />
			<Route path="new" component={PostNew} />
			<Route path="login" component={UserLogin} />
			<Route path="register" component={UserRegister} />
		</Route>
	</Router>
), document.getElementById('root'))
