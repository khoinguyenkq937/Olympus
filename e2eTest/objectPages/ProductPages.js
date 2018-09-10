let AngularProductsPage = function () {
    let btn_addToCart = browser.element(by.xpath("//*[@class='add-to-cart-panel']//*[@value='Add to cart' and @type='button']"));
    let banner_shopping = browser.element(by.id("bar-notification"));
    let close_banner = browser.element(by.xpath("//*[@id='bar-notification']/span[@class='close']"));
    let banner_lnkShopping = browser.element(by.xpath("//*[@id='bar-notification']//*[@href='/cart']"));

        let EC = protractor.ExpectedConditions;

    this.addASelectedProdcut = function () {
        btn_addToCart.click()
    }

    this.verifyBannerShoppingPresent = function () {
        if(banner_shopping.isPresent()){
            expect(banner_shopping.isPresent()).toBe(true);
            expect(banner_lnkShopping.isPresent()).toBe(true);
            close_banner.click();
        }
    }

}

module.exports = new AngularProductsPage();