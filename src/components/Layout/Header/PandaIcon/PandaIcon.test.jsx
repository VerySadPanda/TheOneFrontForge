import React from 'react';
import { shallow } from 'enzyme';
import { Icon } from 'antd';

import PandaIcon from './PandaIcon';

describe('<PandaIcon>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<PandaIcon />);
    });

    it('renders the icon', () => {
        expect(wrapper.find(Icon)).toHaveLength(1);
    });
});
