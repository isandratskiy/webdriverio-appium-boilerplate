const timeout = process.env.DEBUG ? 99999999 : 30000;

exports.config = {
    runner: 'local',
    framework: 'mocha',
    mochaOpts: {
        compilers: [
            'tsconfig-paths/register'
        ],
        ui: 'bdd',
        timeout: timeout
    },
    before: function (capabilities, specs) {
        require('ts-node').register({
            files: true
        });
    },
    afterTest: function (test) {
        if (test.error !== undefined) {
            driver.takeScreenshot()
        }
    },
    sync: true,
    logLevel: 'error',
    deprecationWarnings: false,
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 30000,
    connectionRetryCount: 2,
    reporters: ['spec', ['allure',
        {
            outputDir: './allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false
        }
    ]],
    port: 4723,
    services: [
        ['appium',
            {
                command: 'appium',
                args: {
                    sessionOverride: true,
                    debugLogSpacing: true
                }
            }
        ]
    ]
};
