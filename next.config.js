// next.config.js
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

/**
 * Mutative function to remove the css module on the css stylesheets
 *
 * @param {Object} config webpack configuration
 */
const disableModuleOnCssFiles = (config) => {
    config.module.rules.forEach((rule) => {
        if (rule.test.toString().includes('.css')) {
            rule.rules = rule.use.map((useRule) => { // eslint-disable-line no-param-reassign
                if (typeof useRule === 'string') {
                    return { loader: useRule };
                }

                if (useRule.loader.startsWith('css-loader')) {
                    return {
                        oneOf: [
                            {
                                test: new RegExp('.css$'),
                                loader: useRule.loader,
                                options: { ...useRule.options, modules: false },
                            },
                            {
                                loader: useRule.loader,
                                options: useRule.options,
                            },
                        ],
                    };
                }

                return useRule;
            });

            delete rule.use; // eslint-disable-line no-param-reassign
        }
    });
};

module.exports = withCSS(withSass({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 2,
        localIdentName: '[local]--[hash:base64:5]',
    },

    webpack: (config) => {
        disableModuleOnCssFiles(config);

        return config;
    },
}));
