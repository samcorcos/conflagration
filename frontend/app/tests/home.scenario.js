import assert from 'assert'

describe("Homepage", function() {
  it("should have the right title", function*() {
    yield browser.url('/')
    const title = yield browser.getTitle()
    assert.equal(title, "Conflagration.io")
  })
})
