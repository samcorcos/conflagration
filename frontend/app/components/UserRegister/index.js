import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './styles.css'

const UserRegister = React.createClass({
  render() {
    return (
      <div className={ styles.registrationWrapper }>
        <div className={ styles.registrationCard }>
          <form className={ styles.registrationForm }>
            <div className={ styles.formGroup }>
              <label>First</label>
              <input className={ styles.input } />
            </div>
            <div className={ styles.formGroup }>
              <label>Last</label>
              <input className={ styles.input } />
            </div>
            <div className={ styles.formGroup }>
              <label>Email</label>
              <input className={ styles.input } type="email" />
            </div>
            <div className={ styles.formGroup }>
              <label>Password</label>
              <input className={ styles.input } type="password"/>
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

export default CSSModules(UserRegister, styles);
