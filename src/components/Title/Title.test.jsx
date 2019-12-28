import React from 'react';
import { shallow } from 'enzyme';

import Title from './Title';

describe('<Title>', () => {
    let wrapper;

    const text = 'Test Title';
    beforeEach(() => {
        wrapper = shallow((
            <Title>
                {text}
            </Title>
        ));
    });

    it('renders the h2', () => {
        const title = wrapper.find('h2');

        expect(title).toHaveLength(1);
        expect(title.text()).toEqual(text);
    });
});
