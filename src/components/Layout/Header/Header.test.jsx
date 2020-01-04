import React from 'react';
import { shallow } from 'enzyme';
import { PageHeader } from 'antd';

import Header from './Header';

describe('<Header>', () => {
    const props = {
        onOpenSidebar: jest.fn(),
    };

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Header {...props} />);
    });

    it('renders the page header', () => {
        expect(wrapper.find(PageHeader)).toHaveLength(1);
    });
});
