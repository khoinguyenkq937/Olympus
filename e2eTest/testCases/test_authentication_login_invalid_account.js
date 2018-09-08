let homepage = require('../objectPages/HomePage');
let loginpage = require('../objectPages/LoginPage');

describe('Test Login form', function(){
    it('User logs in unsuccessfully with invalid accounts', function(){
        //Access to Login page - Nopcommerce site
        loginpage.goToLoginPage();
        browser.sleep(3000);

        //Submit login form with blank Email and Password
        loginpage.verifyErrorMsgIsPresentEmptyAccount();

        //then login with invalid Email and Password
        loginpage.loginInvalidAccount();

        //    browser.takeScreenshot().then(function (png) {
        //        callTakeScreenshot.writeScreenShot(png, 'login_Unsuccessfully.png')
        //    })
    })
})