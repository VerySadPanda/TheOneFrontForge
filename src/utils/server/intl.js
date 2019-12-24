const IntlPolyfill = require('intl');

const { readFileSync } = require('fs');
const { basename } = require('path');
const glob = require('glob');

const localeDataCache = new Map();
const supportedLanguages = glob.sync('./lang/*.json').map((file) => basename(file, '.json'));

const polyfillIntl = () => {
    Intl.NumberFormat = IntlPolyfill.NumberFormat;
    Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
};

const getLocaleDataScript = (locale) => {
    const lang = locale.split('-')[0];

    if (!localeDataCache.has(lang)) {
        const localeDataFile = require.resolve(`@formatjs/intl-relativetimeformat/dist/locale-data/${lang}`);
        const localeDataScript = readFileSync(localeDataFile, 'utf8');

        localeDataCache.set(lang, localeDataScript);
    }

    return localeDataCache.get(lang);
};


// eslint-disable-next-line import/no-dynamic-require, global-require
const getMessages = (locale) => require(`./lang/${locale}.json`);

module.exports = {
    supportedLanguages,
    polyfillIntl,
    getLocaleDataScript,
    getMessages,
};
