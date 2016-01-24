import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './styles.css'

import UserRegister from 'components/UserRegister'
import UserLogin from 'components/UserLogin'

const LoggedOut = React.createClass({
  // TODO move out of local state
  getInitialState() {
    return {
      modal: false,
      loginOrRegister: null
    }
  },
  toggleModal(type) {
    this.setState({
      modal: this.state.modal ? false : true,
      loginOrRegister: type
    })
  },
  render() {
    return (
      <div>
        <ul className={ styles.navbarGroup }>
          <li className={ styles.navbarListItem }>
            <div onClick={ this.toggleModal.bind(null, "login") } className={ styles.login }>Log in</div>
          </li>
          <li className={ styles.navbarListItem }>
            <button onClick={this.toggleModal.bind(null, "register") } className={ styles.signupButton }>Sign up</button>
          </li>
        </ul>
        {
          this.state.modal && this.state.loginOrRegister === "register"
        ?
          <div>
            <div onClick={this.toggleModal} className={ styles.modalBackground }></div>
            <UserRegister toggleModal={this.toggleModal} />
          </div>
        :
          null
        }
        {
          this.state.modal && this.state.loginOrRegister === "login"
        ?
          <div>
            <div onClick={this.toggleModal} className={ styles.modalBackground }></div>
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
