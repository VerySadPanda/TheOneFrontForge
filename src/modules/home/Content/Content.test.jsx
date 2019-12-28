import React from 'react';
import { shallow } from 'enzyme';

import Content from './Content';


describe('<Content>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Content />);
    });

    it('renders (sanity)', () => {
        expect(wrapper).toHaveLength(1);
    });
});
