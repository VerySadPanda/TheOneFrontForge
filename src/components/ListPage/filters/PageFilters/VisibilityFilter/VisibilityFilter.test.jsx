import React from 'react';
import { shallow } from 'enzyme';

import RadioFilter from '../RadioFilter';

import VisibilityFilter from './VisibilityFilter';

describe('<VisibilityFilter>', () => {
    const props = {
        label: 'test',
        value: 'draft',
        onChange: jest.fn(),
    };

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<VisibilityFilter {...props} />);
    });

    it('renders the radio filter', () => {
        expect(wrapper.find(RadioFilter)).toHaveLength(1);
    });

    it('renders all the options', () => {
        const options = wrapper.find(RadioFilter).prop('options');

        expect(options).toHaveLength(4);

        const [allOption] = options;
        expect(allOption.name).toEqual('all');
    });
});
