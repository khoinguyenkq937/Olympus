describe('Scroll function javascript', function () {
    it('should be scrolled down and up on a page', function () {
        browser.get("https://www.accorhotels.com");
        let topheader = browser.element(by.id('link-navigation-primaryHeader'));
        browser.wait(topheader.isPresent(), 5000, 'Wait for the top header is present on the page');
        let footer = browser.element(by.id('footer'));
        browser.executeScript("arguments[0].scrollIntoView();", footer);
        let number_callCenter = browser.element(by.xpath("//li[contains(@class,'callcenter-number')]/span"));
        expect(number_callCenter.isPresent()).toBe(true);
        let getNumber = String(number_callCenter.getText);
        console.log(getNumber);
        if(getNumber.includes("1300")){
            console.log("Test is correct");
        }
    })
})