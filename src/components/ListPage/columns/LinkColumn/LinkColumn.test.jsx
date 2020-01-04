import React from 'react';
import { shallow } from 'enzyme';
import Link from 'next/link';

import LinkColumn from './LinkColumn';

describe('<LinkColumn>', () => {
    const props = {
        id: '123',
        name: 'Test Link',
        baseRoute: 'test',
    };

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<LinkColumn {...props} />);
    });

    describe('Link', () => {
        it('renders the link to the list page without resource id', () => {
            wrapper.setProps({ id: undefined });

            expect(wrapper.find(Link)).toHaveLength(0);
        });

        it('renders the link with the resource id', () => {
            wrapper.setProps({ id: '123' });

            expect(wrapper.find(Link).prop('href')).toEqual(`${props.baseRoute}/${props.id}`);
        });
    });

    describe('label', () => {
        it('renders the name', () => {
            wrapper.setProps({ name: 'Test' });

            expect(wrapper.find(Link).find('a').prop('children')).toEqual('Test');
        });

        it('renders the unknown label when the name is not provided', () => {
            wrapper.setProps({ name: undefined });

            expect(wrapper.find(Link).find('a').prop('children')).toEqual('Unknown');
        });
    });
});
