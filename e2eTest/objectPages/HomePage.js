let AngularHomePage = function(){
    let lnk_login = browser.element(by.xpath("//*[@href='/login']"));
    let msg_welcomeHomepage = browser.element(by.xpath("//*[@class='topic-block-title']"));
    let lnk_myAccount = browser.element(by.xpath("//*[contains(@href,'/customer/info')]"));
    //menu_computers for desktop version
    let menu_computers = browser.element(by.xpath("//*[@class='top-menu']//*[@href='/computers']"));

    let EC = protractor.ExpectedConditions;

    this.openHomePage = function(){
        browser.get('http://demo.nopcommerce.com/');
    };

    this.waitForHomePage = function(){
        browser.wait(EC.presenceOf(msg_welcomeHomepage), 10000);
    }

    this.goToLoginPage = function(){
        lnk_login.click();
    }

    this.waitForUserLoginSuccessfully = function(){
        browser.wait(EC.presenceOf(lnk_myAccount), 10000);
        expect(lnk_myAccount.isElementPresent);
    }

    this.goToComputersPage = function () {
        menu_computers.click();
    }
}

module.exports = new AngularHomePage();