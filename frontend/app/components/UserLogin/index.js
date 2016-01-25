import React from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import Actions from 'redux/actions.js';

import CSSModules from 'react-css-modules'
import styles from './styles.css'

const UserLogin = React.createClass({
  handleSubmit(e) {
    e.preventDefault()

    let self = this

    let email = e.target.email.value
    let password = e.target.password.value

    let session = {
      email: email,
      username: email,
      password: password,
      password_confirmation: password
    }

    axios.post('http://localhost:4000/auth/identity/callback', session)
      .then(function(response) {
        console.log('success')
        console.log(response)

        localStorage.phoenix_auth_token = response.data.data.jwt;
        self.props.dispatch(Actions.setCurrentUser(response.data.data));
      })
      .catch(function(response) {
        alert("login error")
        console.log("Failed login...")
        console.log(response)
      })
  },
  render() {
    return (
      <div className={ styles.loginWrapper }>
        <div className={ styles.loginCard }>
          <form className={ styles.loginForm } onSubmit={this.handleSubmit}>
            <div className={ styles.formGroup }>
              <label>Email</label>
              <input name="email" className={ styles.input } type="email" />
            </div>
            <div className={ styles.formGroup }>
              <label>Password</label>
              <input name="password" className={ styles.input } type="password"/>
            </div>
            <button className={ styles.btnPrimary }>Submit</button>
          </form>
          <hr />
          <div className={ styles.socialLoginWrapper }>
            Or login with one of the following:
            <div className={ styles.socialLoginPlaceholder }>
              Google+
            </div>
            <div className={ styles.socialLoginPlaceholder }>
              Twitter
            </div>
            <div className={ styles.socialLoginPlaceholder }>
              Facebook
            </div>
          </div>
        </div>
      </div>
    )
  }
});

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(CSSModules(UserLogin, styles));
