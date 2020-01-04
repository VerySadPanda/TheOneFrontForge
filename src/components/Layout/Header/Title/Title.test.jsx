import React from 'react';
import { shallow } from 'enzyme';
import Link from 'next/link';

import Title from './Title';
import PandaIcon from '../PandaIcon';

describe('<HeaderTitle>', () => {
    const props = {
        onOpenSidebar: jest.fn(),
    };

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Title {...props} />);
    });

    it('renders the menu icon', () => {
        expect(wrapper.find({ name: 'menu-icon' })).toHaveLength(1);
    });

    it('renders the link', () => {
        const link = wrapper.find(Link);

        expect(link).toHaveLength(1);
        expect(link.prop('href')).toEqual('/');
    });

    it('renders the home icon', () => {
        expect(wrapper.find(Link).find(PandaIcon)).toHaveLength(1);
    });

    it('triggers the toggle sidebar callback', () => {
        wrapper.find({ name: 'menu-icon' }).simulate('click');

        expect(props.onOpenSidebar).toHaveBeenCalledTimes(1);
    });
});
