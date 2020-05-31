const {config} = require('./wdio.shared.conf');

config.specs = [
    './test/**/*.ts',
    './test/**/*.js'
];

config.capabilities = [
    {
        platformName: 'Android',
        automationName: 'UiAutomator2',
        deviceName: 'Android Emulator',
        app: './app/ApiDemos-debug.apk',
        newCommandTimeout: 30 * 60000,
        maxInstances: 1
    }
];

exports.config = config;