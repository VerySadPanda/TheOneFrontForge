import React from 'react';
import { shallow } from 'enzyme';
import { Dropdown } from 'antd';

import CampaignDropdown from './CampaignDropdown';

describe('<CampaignDropdown>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CampaignDropdown />);
    });

    it('renders the dropdown', () => {
        expect(wrapper.find(Dropdown)).toHaveLength(1);
    });
});
