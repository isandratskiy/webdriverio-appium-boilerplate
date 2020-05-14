const {config} = require('./wdio.shared.conf');

config.specs = [
    './tests/**/*.ts',
    './tests/**/*.js'
];

config.capabilities = [
    {
        platformName: 'Android',
        automationName: 'UiAutomator2',
        deviceName: 'Android Emulator',
        app: './src/resources/ApiDemos-debug.apk',
        newCommandTimeout: 30 * 60000,
        maxInstances: 1
    }
];

exports.config = config;