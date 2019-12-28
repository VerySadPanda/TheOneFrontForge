import React from 'react';
import { shallow } from 'enzyme';
import { Card } from 'antd';
import * as nextRouter from 'next/router';

import CardGridItem from './CardGridItem';
import messages from '../../../messages';

const pushMock = jest.fn();
nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ push: pushMock }));

describe('<CardGridItem>', () => {
    const props = {
        message: 'test-card-1',
    };

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CardGridItem {...props} />);
    });

    afterEach(() => {
        pushMock.mockReset();
    });

    it('renders the card', () => {
        expect(wrapper.find(Card)).toHaveLength(1);
    });

    describe('Description', () => {
        it('renders with string', () => {
            const description = 'Test description';
            wrapper.setProps({ description });

            expect(wrapper.find({ name: 'card-description' }).text()).toEqual(description);
        });

        it('renders with object', () => {
            wrapper.setProps({ description: messages.title });

            expect(wrapper.find({ name: 'card-description' }).text()).toEqual(messages.title.defaultMessage);
        });
    });

    describe('Redirect', () => {
        it('redirects when the card is a link', () => {
            wrapper.setProps({ href: '/test' });

            wrapper.find(Card).simulate('click');

            expect(pushMock).toHaveBeenCalledWith('/test');
        });

        it('does not redirect when the card is not a link', () => {
            wrapper.setProps({ href: null });

            wrapper.find(Card).simulate('click');

            expect(pushMock).not.toHaveBeenCalledWith('/test');
        });
    });
});
