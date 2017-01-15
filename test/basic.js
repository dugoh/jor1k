var assert = require("assert");
var webdriver = require("selenium-webdriver");

describe("testing javascript in the browser", function() {
  beforeEach(function() {
    if (process.env.SAUCE_USERNAME != undefined) {
      this.browser = new webdriver.Builder()
      .usingServer('http://'+ process.env.SAUCE_USERNAME+':'+process.env.SAUCE_ACCESS_KEY+'@ondemand.saucelabs.com:80/wd/hub')
      .withCapabilities({
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        build: process.env.TRAVIS_BUILD_NUMBER,
        username: process.env.SAUCE_USERNAME,
        accessKey: process.env.SAUCE_ACCESS_KEY,
        browserName: "chrome"
      }).build();
    } else {
      this.browser = new webdriver.Builder()
      .withCapabilities({
        browserName: "chrome"
      }).build();
    }

    return this.browser.get("http://localhost:8000/index.html");
  });

  afterEach(function() {
    return this.browser.quit();
  });

  it("should handle a click", function(done) {
    var terminal = this.browser.findElement(webdriver.By.id('tty0'));
    //terminal.click();
    this.browser.sleep(5000);
    this.browser.sleep(5000);
    this.browser.sleep(5000);
    //this.browser.window.scrollTo(0, 0);
    terminal.getText().then(function(txt) {
      assert.equal(txt, "Terminal uses canvas");
      done();
    });
  });

});

