import React from 'react';
import { shallow } from 'enzyme';
import Link from 'next/link';

import Title from './Title';
import PandaIcon from '../PandaIcon';

describe('<HeaderTitle>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Title />);
    });

    it('renders the link', () => {
        const link = wrapper.find(Link);

        expect(link).toHaveLength(1);
        expect(link.prop('href')).toEqual('/');
    });

    it('renders the icon', () => {
        expect(wrapper.find(PandaIcon)).toHaveLength(1);
    });
});
