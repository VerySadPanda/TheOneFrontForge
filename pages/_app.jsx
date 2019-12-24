import React from 'react';
import App from 'next/app';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import 'antd/dist/antd.css';

// This is optional but highly recommended
// since it prevents memory leak
const cache = createIntlCache();

export default class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        // Get the `locale` and `messages` from the request object on the server.
        // In the browser, use the same values that the server serialized.
        const { req } = ctx;

        // eslint-disable-next-line no-underscore-dangle
        const { locale, messages } = req || window.__NEXT_DATA__.props;

        return { pageProps, locale, messages };
    }

    render() {
        const {
            Component,
            pageProps,
            locale = 'en',
            messages,
        } = this.props;

        return (
            <RawIntlProvider value={createIntl({ locale, messages }, cache)}>
                <Component {...pageProps} />
            </RawIntlProvider>
        );
    }
}
