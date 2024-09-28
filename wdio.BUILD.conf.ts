const url = require('node:url');
const path = require('node:path');
const buildConfig = require('./wdio.conf.js').config;

const dirname = url.fileURLToPath(new URL('.', import.meta.url));

buildConfig.capabilities = [
    {
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                '--disable-infobars',
                '--window-size=1280,800',
                '--headless',
                '--no-sandbox',
                '--disable-gpu',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
            ],
        },
    },
];

buildConfig.services = [
    [
        'static-server',
        {
            port: 8080,
            folders: [
                { mount: '/', path: path.join(dirname, 'demo-app') },
            ],
        },
    ],
];

buildConfig.path = '/';

buildConfig.beforeFeature = async () => {
    await browser.url('/');
    const pageTitle = await browser.getTitle();
    if (pageTitle !== 'DEMO APP') {
        console.error(`Demo app is not up, found ${pageTitle}`);
        console.log(await browser.getPageSource());
        process.exit(1);
    }
};

if (process.env.CI) {
    buildConfig.outputDir = path.join(dirname, 'logs');
}

module.exports = { config: buildConfig };
