import React from 'react';
import { shallow } from 'enzyme';
import { Radio, Tooltip } from 'antd';

import RadioFilterButton from './RadioFilterButton';

describe('<RadioFilterButton>', () => {
    const props = {
        name: 'test',
        label: 'Test',
        tooltip: 'Test tooltip',
    };

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<RadioFilterButton {...props} />);
    });

    it('renders the button with the correct value', () => {
        expect(wrapper.find(Radio.Button).prop('value')).toEqual(props.name);
    });

    it('renders the label', () => {
        expect(wrapper.find(Radio.Button).prop('children')).toEqual(props.label);
    });

    it('renders the tooltip when provided', () => {
        wrapper.setProps({ tooltip: 'test tooltip' });

        expect(wrapper.find(Tooltip)).toHaveLength(1);
    });

    it('does not render the tooltip when not provided', () => {
        wrapper.setProps({ tooltip: null });

        expect(wrapper.find(Tooltip)).toHaveLength(0);
    });
});
