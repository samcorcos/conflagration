import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './styles.css'

import UserRegister from 'components/UserRegister'
import UserLogin from 'components/UserLogin'

const LoggedOut = React.createClass({
  // TODO move out of local state
  getInitialState() {
    return {
      modal: true,
      loginOrRegister: "login"
    }
  },
  toggleModal(type, e) {
    this.setState({
      //modal: this.state.modal ? false : true,
      modal: true,
      loginOrRegister: "login"
    })
  },
  render() {
    return (
      <div>
        <ul className={ styles.navbarGroup }>
          <li className={ styles.navbarListItem }>
            <div onClick={ this.toggleModal.bind(this, "login") } className={ styles.login }>Log in</div>
          </li>
          <li className={ styles.navbarListItem }>
            <button onClick={this.toggleModal.bind(this, "register") } className={ styles.signupButton }>Sign up</button>
          </li>
        </ul>
        {
          this.state.modal && this.state.loginOrRegister === "register"
        ?
          <div id="modal" onClick={this.toggleModal.bind(this, "")} className={ styles.modalBackground }>
            <UserRegister toggleModal={this.toggleModal} />
          </div>
        :
          null
        }
        {
          this.state.modal && this.state.loginOrRegister === "login"
        ?
          <div id="modal" onClick={this.toggleModal.bind(this, "")} className={ styles.modalBackground }>
            <UserLogin toggleModal={this.toggleModal} />
          </div>
        :
          null
        }
      </div>
    )
  }
})

export default CSSModules(LoggedOut, styles)
