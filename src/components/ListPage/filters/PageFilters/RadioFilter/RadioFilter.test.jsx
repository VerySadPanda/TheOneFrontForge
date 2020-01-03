import React from 'react';
import { shallow } from 'enzyme';
import { Radio } from 'antd';

import RadioFilter from './RadioFilter';

describe('<RadioFilter>', () => {
    const props = {
        label: 'Test Group',
        name: 'test-group',
        value: 'test2',
        options: [
            { name: 'test1', label: 'Test 1' },
            { name: 'test2', label: 'Test 2' },
            { name: 'test3', label: 'Test 3' },
            { name: 'test4', label: 'Test 4' },
        ],
        onChange: jest.fn(),
    };

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<RadioFilter {...props} />);
    });

    it('renders the label', () => {
        expect(wrapper.find({ name: 'radio-label' })).toHaveLength(1);
    });

    it('renders the radio group', () => {
        expect(wrapper.find(Radio.Group)).toHaveLength(1);
    });

    it('renders the radio buttons', () => {
        expect(wrapper.find(Radio.Button)).toHaveLength(props.options.length);
    });

    it('triggers the change callback', () => {
        wrapper.find(Radio.Group).simulate('change', { target: { value: 'new-value' } });

        expect(props.onChange).toHaveBeenCalledWith(props.name, 'new-value');
    });
});
