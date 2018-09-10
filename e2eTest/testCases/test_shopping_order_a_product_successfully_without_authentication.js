let homepage = require('../objectPages/HomePage');
let topheader = require('../objectPages/TopHeader');
let computerspage = require('../objectPages/ComputersPage');
let notebookpages = require('../objectPages/NoteBooksPage');
let productspage = require('../objectPages/ProductPages');

describe('Validate a flow of shopping', function () {
    it('It should add and order successfully an product', function () {
        homepage.openHomePage();
        browser.sleep(2000);
        homepage.goToComputersPage();
        browser.sleep(2000);
        computerspage.goToNotebooksPage();
        browser.sleep(2000);
        notebookpages.addARandomProdcut();
        browser.sleep(2000);
        productspage.addASelectedProdcut();
        browser.sleep(2000);
        productspage.verifyBannerShoppingPresent();
        browser.sleep(2000);
        topheader.goToShoppingCartPage();
    })
})