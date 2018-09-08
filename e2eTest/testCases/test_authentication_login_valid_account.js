let homepage = require('../objectPages/HomePage');
let loginpage = require('../objectPages/LoginPage');

describe('Test Login form', function () {
    it('User logs in successfully with valid account', function () {
        homepage.openHomePage();
        homepage.waitForHomePage();
        homepage.goToLoginPage();
        browser.sleep(2000);
        loginpage.fillLoginForm();
        homepage.waitForUserLoginSuccessfully();

        //Take a screenshot if login successfully
    //    browser.takeScreenshot().then(function (png) {
        //       callTakeScreenshot.writeScreenShot(png, 'login_successfully.png')
     //   })
    })
})