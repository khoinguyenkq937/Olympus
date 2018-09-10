let AngularComputersPage = function () {
    let img_notebooks = browser.element(by.xpath("//*[contains(@class,'category-grid')]//*[contains(@href,'/notebooks')]/img"));

    let EC = protractor.ExpectedConditions;

    this.goToNotebooksPage = function () {
        img_notebooks.click()
    }
}

module.exports = new AngularComputersPage();