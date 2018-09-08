let AngularLoginPage = function () {
    let input_email = browser.element(by.id('Email'));
    let input_password = browser.element(by.id('Password'));
    let btn_submit = browser.element(by.xpath("//input[contains(@class,'login-button')]"));
    let error_emptyValue =  browser.element(by.id('Email-error'));
    let error_invalidCredentials = browser.element(by.xpath("//*[contains(@class,'validation-summary-errors')]"));

    let EC = protractor.ExpectedConditions;

    this.goToLoginPage = function () {
       // browser.get('http://demo.nopcommerce.com/login/');
        browser.get(browser.params.url_list.loginpage.URL);
    }

    this.fillLoginForm = function () {
     //   input_email.sendKeys('seven_03092018_02@yopmail.fr');
        input_email.sendKeys(browser.params.accounts_list.valid_accounts.username);
     //   input_password.sendKeys('passwd123');
        input_email.sendKeys(browser.params.accounts_list.valid_accounts.password);
        btn_submit.click();
        browser.sleep(2000);
    }

    this.loginInvalidAccount = function () {
     //   input_email.sendKeys('abc_xyz_123@yopmail.fr');
        input_email.sendKeys(browser.params.accounts_list.invalid_accounts.username);
    //    input_password.sendKeys('passwd777');
        input_email.sendKeys(browser.params.accounts_list.invalid_accounts.password);
        btn_submit.click();
        browser.sleep(2000);
        browser.wait(EC.presenceOf(error_invalidCredentials), 10000);
        expect(error_invalidCredentials.getText()).toContain('xxxxxxxxxx');
    }

    this.verifyErrorMsgIsPresentEmptyAccount = function () {
        btn_submit.click();
        browser.wait(EC.presenceOf(error_emptyValue), 10000);
        expect(error_emptyValue.getText()).toEqual('Please enter your account');
    }


}

module.exports = new AngularLoginPage();