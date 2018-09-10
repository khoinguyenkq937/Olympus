let AngularTopHeader = function() {
    let lnk_login = browser.element(by.xpath("//*[@class='header-upper']//*[@href='/login']"));
    let lnk_register = browser.element(by.xpath("//*[@class='header-upper']//*[@href='/register']"));
    let lnk_wishlist = browser.element(by.xpath("//*[@class='header-upper']//*[@href='/wishlist']"));
    let lnk_shoppingcart = browser.element(by.xpath("//*[@class='header-upper']//*[@id='topcartlink']//*[@href='/cart']"));

    this.goToRegisterPage = function () {
        lnk_login.click();
    }

    this.goToLoginPage = function () {
        lnk_register.click();
    }

    this.goToWishListPage = function () {
        lnk_wishlist.click();
    }

    this.goToShoppingCartPage = function () {
        lnk_shoppingcart.click();
    }
}

module.exports = new AngularTopHeader();