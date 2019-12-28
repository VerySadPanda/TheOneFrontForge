import React from 'react';
import { shallow } from 'enzyme';
import { Icon } from 'antd';

import CardTitle from './CardTitle';
import messages from '../../../messages';

describe('<CardTitle>', () => {
    const props = {
        title: 'test-card-1',
    };

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CardTitle {...props} />);
    });

    describe('Title', () => {
        it('renders with string', () => {
            const title = 'Test description';
            wrapper.setProps({ title });

            expect(wrapper.text()).toEqual(title);
        });

        it('renders with object', () => {
            wrapper.setProps({ title: messages.title });

            expect(wrapper.text()).toEqual(messages.title.defaultMessage);
        });
    });

    describe('Icon', () => {
        it('renders when the icon type is provided', () => {
            wrapper.setProps({ icon: 'user' });

            expect(wrapper.find(Icon)).toHaveLength(1);
        });

        it('does not render when no icon type is provided', () => {
            wrapper.setProps({ icon: null });

            expect(wrapper.find(Icon)).toHaveLength(0);
        });
    });
});
