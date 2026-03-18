import { join } from 'path';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

export const config: WebdriverIO.Config = {
    runner: 'local',
    port: 4723,

    specs: [
        './src/tests/*.spec.ts'
    ],
    exclude: [
    ],

    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Android Emulator',
        'appium:automationName': 'UiAutomator2',
        'appium:app': join(process.cwd(), 'app/picklearena.apk'),
        'appium:autoGrantPermissions': true,
    }],

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        ['appium', {
            command: 'appium',
            args: {
                address: '127.0.0.1',
                port: 4723,
                basePath: '/'
            }
        }]
    ],
    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
            outputDir: './allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    beforeSession: function (config, capabilities, specs, cid) {
        if ((capabilities as WebdriverIO.Capabilities).platformName === 'Android') {
            const { execSync } = require('child_process');
            try {
                execSync('adb shell settings put secure stylus_handwriting_enabled 0');
                console.log('Disabled stylus handwriting for Android emulator.');
            } catch (err: any) {
                console.error('Failed to disable stylus handwriting:', err.message);
            }
        }
    },
};
