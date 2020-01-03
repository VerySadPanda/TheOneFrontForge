import React from 'react';
import { shallow } from 'enzyme';

import RadioFilter from '../RadioFilter';

import VisibilityStatusFilter from './VisibilityStatusFilter';

describe('<VisibilityStatusFilter>', () => {
    const props = {
        label: 'test',
        value: 'draft',
        onChange: jest.fn(),
    };

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<VisibilityStatusFilter {...props} />);
    });

    it('renders the radio filter', () => {
        expect(wrapper.find(RadioFilter)).toHaveLength(1);
    });
});
