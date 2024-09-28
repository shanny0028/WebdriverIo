const url = require('node:url');
const path = require('node:path');
const hooks = require('./src/support/hooks.js');
const cucumberjson= require ('wdio-cucumberjs-json-reporter').default;

const dirname = url.fileURLToPath(new URL('.', import.meta.url));

const config = {
    runner: 'local',
    specs: ['./src/features/**/*.feature'],
    exclude: [],
    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: [
                    '--disable-web-security',
                    '--disable-features=BiDiMapper',
                    '--disable-dev-shm-usage',
                    '--disable-gpu',
                    '--no-sandbox',
                    '--disable-extensions',
                ],
            },
            acceptInsecureCerts: true,
        },
    ],
    beforeScenario:function(){
      browser.maximizeWindow();
    },
    logLevel: 'trace',
    outputDir: path.join(dirname, '/logs'),
    bail: 0,
    baseUrl: 'http://localhost:8080',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    // services: ['chromedriver'],
    reporters: [
      'spec',
      ['cucumberjs-json', {
        jsonFolder: './src/reports',
        language: 'en', // Optional, but helps if needed
      }]
    ],
    cucumberOpts: {
        backtrace: false,
        requireModule: [],
        failAmbiguousDefinitions: true,
        failFast: false,
        ignoreUndefinedDefinitions: false,
        names: [],
        snippets: true,
        source: true,
        profile: [],
        require: [
            './src/steps/given.ts',
            './src/steps/then.ts',
            './src/steps/when.ts',
        ],
        scenarioLevelReporter: false,
        order: 'defined',
        strict: true,
        tagExpression: 'not @Pending',
        tagsInTitle: false,
        timeout: 20000,
    },
    ...hooks,
};

module.exports = { config };
