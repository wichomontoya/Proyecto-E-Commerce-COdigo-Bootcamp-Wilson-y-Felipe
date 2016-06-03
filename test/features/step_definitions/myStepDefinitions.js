module.exports = function () {
  // overwrite default World constructor
  this.World = require("../support/world.js").World;

  this.Given(/^I am on my site home$/, function (callback) {
    var url = 'http://localhost:9000'
    this.browser.visit(url, callback);
  });

  this.Then(/^I should see "(.*)" as the page title$/, function (title, callback) {
    this.browser.assert.text('title', title);
    callback();
  });
};
