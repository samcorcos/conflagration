import assert from 'assert'
import Homepage from './home.lib.js'
import { userData } from '../config/seeds.js'

describe("Login", function() {
  describe("Login link", function() {
    it("should show the login modal", function*() {
      // setup
      const home = new Homepage(browser)

      // execute
      yield home.routeHome()
      yield home.openLoginModal()

      // verify
      const isVisible = yield browser.isVisible("[class^=styles__loginCard]")
      assert(isVisible === true)
    })

    // it("should log the user in", function*() {
    //   // setup
    //   const home = new Homepage(browser)
    //
    //   // execute
    //   yield home.routeHome()
    //   yield home.openLoginModal()
    //   // TODO this needs to be set up
    //   yield home.login(userData.username, userData.password)
    //
    //   // verify
    //
    //   // once the user is logged in, "styles__profile" should be there and the login button should not be there
    // })




  })
})
