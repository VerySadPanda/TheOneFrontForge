import React from 'react';
import { shallow } from 'enzyme';

import LinkColumn from '../LinkColumn';

import OrganizationColumn from './OrganizationColumn';

describe('<LocationColumn>', () => {
    const props = {
        id: '123',
        name: 'Test Link',
    };

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<OrganizationColumn {...props} />);
    });

    it('renders the link column with the baseRoute prop', () => {
        expect(wrapper.find(LinkColumn).prop('baseRoute')).toEqual('organization');
    });
});
