class Homepage {
  constructor(browser) {
    this.browser = browser
  }
  openLoginModal() {
    return this.browser.click("[class^=styles__navbarListItem] [class^=styles__login]")
  }
  routeHome() {
    return this.browser.url('/')
  }
  login(username, password) {
    // get the element for entering text
    // http://webdriver.io/api/action/addValue.html
    // yield browser.addValue(// selector, username)
    // yield browser.addValue(//selector, password)
    // yield browser.click(//selector for button)

    // will need some kind of wait and timeout to make sure it works, browser.pause
    // or waitForVisible
  }
}

export default Homepage
