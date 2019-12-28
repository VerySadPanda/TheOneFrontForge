import React from 'react';
import { shallow } from 'enzyme';
import { Dropdown } from 'antd';

import UserDropdown from './UserDropdown';

describe('<UserDropdown>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<UserDropdown />);
    });

    it('renders the dropdown', () => {
        expect(wrapper.find(Dropdown)).toHaveLength(1);
    });
});
