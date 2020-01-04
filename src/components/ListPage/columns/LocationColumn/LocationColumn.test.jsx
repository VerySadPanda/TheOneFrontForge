import React from 'react';
import { shallow } from 'enzyme';

import LinkColumn from '../LinkColumn';

import renderColumn, { LocationColumn } from './LocationColumn';

describe('<LocationColumn>', () => {
    const props = {
        id: '123',
        name: 'Test Link',
    };

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<LocationColumn {...props} />);
    });

    it('renders the link column with the baseRoute prop', () => {
        expect(wrapper.find(LinkColumn).prop('baseRoute')).toEqual('location');
    });

    it('renders the link column using the render function', () => {
        const renderWrapper = shallow(renderColumn(props));

        expect(renderWrapper.find(LinkColumn)).toHaveLength(1);
    });

    it('renders the link column using the render function without location', () => {
        const renderWrapper = shallow(renderColumn(null));

        expect(renderWrapper.find(LinkColumn)).toHaveLength(1);
    });
});
