import React from 'react';
import { shallow } from 'enzyme';
import { Input } from 'antd';

import TextFilter from './TextFilter';

describe('<TextFilter>', () => {
    const props = {
        label: 'Test',
        name: 'test',
        value: 'my-test',
        onChange: jest.fn(),
    };

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<TextFilter {...props} />);
    });

    it('renders the input', () => {
        expect(wrapper.find(Input)).toHaveLength(1);
    });

    it('triggers the change callback', () => {
        wrapper.find(Input).simulate('change', { target: { value: 'new-value' } });

        expect(props.onChange).toHaveBeenCalledWith(props.name, 'new-value');
    });
});
