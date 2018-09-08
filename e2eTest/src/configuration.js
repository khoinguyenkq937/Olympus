//let Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {

    plugins: [{
        package: 'jasmine2-protractor-utils',
        disableHTMLReport: true,
        disableScreenshot: false,
        screenshotPath: '../report',
        screenshotOnExpectFailure: false,
        screenshotOnSpecFailure: true,
        clearFoldersBeforeTest: true,
        htmlReportDir: '../report'
    }],

    framework: 'jasmine',
    directConnect: 'true',
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome',
        /*        chromeOptions: {
                    args: [
                        '--start-maximized'
                    ]
                }*/
    },

    //params: require('D:/Protractor Files/SharingProjectGit/ProtractorJSS/nopCommerce/Data/LoginFunction/data_login_valid_account.json'),
    suites: {
        login_invalid_account: '../testCases/test_authentication_login_invalid_account.js',
        login_valid_account: '../testCases/test_authentication_login_valid_account.js'
    },

    onPrepare: function () {
        browser.ignoreSynchronization = true;
        //global.callTakeScreenshot = require('./takeScreenshot');

        /*
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'D:/Protractor Files/SharingProjectGit/ProtractorJSS/nopCommerce/Report',
                fileName: 'login_valid',
                takeScreenshots: true,
                takeScreenshotOnlyFailures: true
            })
        );
        */

        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: '../report',
            filePrefix: 'xmlresults'
        }));

    },

    onComplete: function () {
        var browserName, browserVersion;
        var capsPromise = browser.getCapabilities();

        capsPromise.then(function (caps) {
            browserName = caps.get('browserName');
            //browserVersion = caps.get('version');
            platform = caps.get('platform');

            var HTMLReport = require('protractor-html-reporter-2');

            testConfig = {
                reportTitle: 'Protractor Test Execution Report',
                outputPath: '../report',
                outputFilename: 'ProtractorTestReport',
                screenshotPath: '../report',
                testBrowser: 'chromeBrowser',
                browserVersion: '69.0.3497.81',
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true,
                testPlatform: platform
            };

            new HTMLReport().from('../report/xmlresults.xml', testConfig);
        });
    }
};