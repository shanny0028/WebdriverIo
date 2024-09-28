const url = require('node:url');
const path = require('node:path');
const hooks = require('./src/support/hooks.js');
const cucumberjson= require ('wdio-cucumberjs-json-reporter').default;
const baseconfig= require ('./wdio.conf');

const dirname = url.fileURLToPath(new URL('.', import.meta.url));

const config = {
    ...baseconfig,
    username:"",
    password:"",
    runner: 'local',
    specs: ['./src/features/**/*.feature'],
    exclude: [],
    capabilities: [
        {
            browserName: 'chrome',
            'bstack:Options': {
              os:"windows",
              buildName:'bstack-chrome-womdows', 
              osversion:'11'
            },
            acceptInsecureCerts: true,
        },
    ],
    logLevel: 'trace',
    outputDir: path.join(dirname, '/logs'),
    bail: 0,
    baseUrl: 'http://localhost:8080',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    // services: ['browserstack'],
    reporters: ['spec',
      ['cucumberjs-json',
        {
          jsonfolder:'./src/reports'
        }
      ]
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
            './src/steps/*.ts',
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
