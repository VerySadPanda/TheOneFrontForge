import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

configure({ adapter: new Adapter() });

chai.use(chaiEnzyme());

/** Workaround for useEffect. It will run the effect synchronously if any deps changes */
jest.spyOn(React, 'useEffect').mockImplementation((cb, deps) => {
    // create a new symbol, different at each run and save the first one
    const firstRun = Symbol('first-run');
    const isFirstRun = React.useMemo(() => firstRun, []) === firstRun;
    const ref = React.useMemo(() => ({ current: deps }), []);
    const last = ref.current;

    // compare the last known version of deps with the current one
    const changed = deps && last.some((value, i) => value !== deps[i]);

    if (isFirstRun || changed) {
        ref.current = deps;
        // run the callback if it changed
        cb();
    }
});

jest.mock('react-intl', () => {
    const reactIntl = require.requireActual('react-intl');
    const intl = reactIntl.createIntl({ locale: 'en' });

    return {
        ...reactIntl,
        useIntl: () => intl,
        FormattedMessage: (props) => intl.formatMessage(props),
    };
});
