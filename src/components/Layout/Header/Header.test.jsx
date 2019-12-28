import React from 'react';
import { shallow } from 'enzyme';
import { PageHeader } from 'antd';

import Header from './Header';

describe('<Header>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Header />);
    });

    it('renders the page header', () => {
        expect(wrapper.find(PageHeader)).toHaveLength(1);
    });
});
