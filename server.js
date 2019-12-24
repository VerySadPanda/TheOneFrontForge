const { createServer } = require('http');
const accepts = require('accepts');
const next = require('next');

const { supportedLanguages, getLocaleDataScript, getMessages } = require('./src/utils/server/intl');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    createServer((req, res) => {
        const accept = accepts(req);
        const locale = accept.language(supportedLanguages) || 'en';
        req.locale = locale;
        req.localeDataScript = getLocaleDataScript(locale);
        req.messages = dev ? {} : getMessages(locale);

        handle(req, res);
    }).listen(port, (err) => {
        if (err) {
            throw err;
        }

        // eslint-disable-next-line no-console
        console.log(`> Ready on http://localhost:${port}`);
    });
});
