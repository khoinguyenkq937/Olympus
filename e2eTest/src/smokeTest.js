let Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {

    framework: 'jasmine',
    directConnect: 'true',
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                '--start-maximized'
            ]
        }
    },

    //params: require('D:/Protractor Files/SharingProjectGit/ProtractorJSS/nopCommerce/Data/LoginFunction/data_login_valid_account.json'),
    params: {
        accounts_list: require('../data/data_list_of_account.json'),
        url_list: require('../data/data_list_of_urls.json')
    },
    suites: {
     //   login_invalid_account: '../testCases/test_authentication_login_invalid_account.js',
     //   login_valid_account: '../testCases/test_authentication_login_valid_account.js',
        demoTest: '../testCases/TestTemp.js'
    },

    onPrepare: function () {
        browser.ignoreSynchronization = true;
        //global.callTakeScreenshot = require('./takeScreenshot');

        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: '../jasmine2_report',
                fileName: 'smoketest',
                takeScreenshots: true,
                takeScreenshotOnlyFailures: true
            })
        );

    },
};