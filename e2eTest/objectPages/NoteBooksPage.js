let AngularNoteBooksPage = function () {
    let btn_addToCart = browser.element.all(by.xpath("//*[@value='Add to cart' and @type='button']"));

    let EC = protractor.ExpectedConditions;

    this.addARandomProdcut = function () {
        if(btn_addToCart.first().isPresent()){
            btn_addToCart.first().click();
        }else{
            console.log('There is no product that you can order right now. Please wait for the next sale');
        }
    }
}

module.exports = new AngularNoteBooksPage();