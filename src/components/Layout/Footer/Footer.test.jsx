import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('<Footer>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Footer />);
    });

    it('renders the left container', () => {
        expect(wrapper.find({ name: 'left-container' })).toHaveLength(1);
    });

    it('renders the right container', () => {
        expect(wrapper.find({ name: 'right-container' })).toHaveLength(1);
    });
});
