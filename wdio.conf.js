exports.config = {

    runner: 'local',

    specs: [
        './test/specs/**/*.js'
    ],

    maxInstances: 1,

    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:udid': 'RZ8T50S0SRF',
        'appium:appPackage': 'ch.payyap.smartpos',
        'appium:appActivity': '.ui.activities.splash.SplashActivity',
        'appium:noReset': false,
        'appium:newCommandTimeout': 600,
        'appium:autoGrantPermissions': true
    }],

    logLevel: 'info',

    framework: 'mocha',

    reporters: [
        'spec',
        ['allure', {
            outputDir: './allure-results',

            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,

            addConsoleLogs: true
        }]
    ],

    services: [
        ['appium']
    ],

    port: 4723,

    mochaOpts: {
        ui: 'bdd',
        timeout: 300000
    },

    afterTest: async function () {

        try {

            console.log("Clearing Payyap app data...");

            await browser.execute('mobile: clearApp', {
                appId: 'ch.payyap.smartpos'
            });

            console.log(
                "Payyap app data cleared. Next test will start from login."
            );

        } catch (error) {

            console.log(
                `Failed to clear Payyap app data: ${error.message}`
            );

        }
    }
};