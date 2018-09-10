let AngularLoginPage = function () {
    let input_email = browser.element(by.id('Email'));
    let input_password = browser.element(by.id('Password'));
    let btn_submit = browser.element(by.xpath("//input[contains(@class,'login-button')]"));
    let error_emptyValue =  browser.element(by.id('Email-error'));
    let error_invalidCredentials = browser.element(by.xpath("//*[contains(@class,'validation-summary-errors')]"));

    let EC = protractor.ExpectedConditions;

    this.goToLoginPage = function () {
        browser.get('http://demo.nopcommerce.com/login/');
    }

    this.fillLoginForm = function () {
        input_email.sendKeys('seven_03092018_02@yopmail.fr');
        input_password.sendKeys('passwd123');
        btn_submit.click();
        browser.sleep(2000);
    }

    this.loginInvalidAccount = function () {
        input_email.sendKeys('abc_xyz_123@yopmail.fr');
        input_password.sendKeys('passwd777');
        btn_submit.click();
        browser.sleep(2000);
        browser.wait(EC.presenceOf(error_invalidCredentials), 10000);
        expect(error_invalidCredentials.getText()).toContain('xxxxxxxxxxx');
    }

    this.verifyErrorMsgIsPresentEmptyAccount = function () {
        btn_submit.click();
        browser.wait(EC.presenceOf(error_emptyValue), 10000);
        expect(error_emptyValue.getText()).toEqual('Please enter your email');
    }


}

module.exports = new AngularLoginPage();