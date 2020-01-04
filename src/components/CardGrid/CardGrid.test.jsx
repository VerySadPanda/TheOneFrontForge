import React from 'react';
import { shallow } from 'enzyme';
import { List } from 'antd';

import CardGridItem from './CardGridItem';

import CardGrid from './CardGrid';

describe('<CardGrid>', () => {
    const props = {
        data: [
            { message: { id: 'test-card-1' } },
            { message: { id: 'test-card-2' } },
        ],
        cardClassName: 'my-card',
    };

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CardGrid {...props} />);
    });

    it('renders the list', () => {
        expect(wrapper.find(List)).toHaveLength(1);
    });

    it('adds the card class name to the cards', () => {
        const renderCard = wrapper.find(List).prop('renderItem');
        const cardWrapper = wrapper.wrap(renderCard(props.data[0]));

        const cardItem = cardWrapper.find(CardGridItem);
        expect(cardItem).toHaveLength(1);
        expect(cardItem.prop('className')).toContain(props.cardClassName);
    });
});
