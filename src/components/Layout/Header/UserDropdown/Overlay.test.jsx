import React from 'react';
import { shallow } from 'enzyme';

import Overlay from './Overlay';

describe('<Overlay>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Overlay />);
    });

    it('renders the user setting button', () => {
        expect(wrapper.find({ name: 'user-settings' })).toHaveLength(1);
    });

    it('renders the user logout button', () => {
        expect(wrapper.find({ name: 'user-logout' })).toHaveLength(1);
    });
});
