import React from 'react';
import { shallow } from 'enzyme';

import Overlay from './Overlay';

describe('<Overlay>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Overlay />);
    });

    it('renders the edit campaign button', () => {
        expect(wrapper.find({ name: 'edit-campaign' })).toHaveLength(1);
    });

    it('renders the list campaign button', () => {
        expect(wrapper.find({ name: 'list-campaign' })).toHaveLength(1);
    });

    it('renders the delete campaign button', () => {
        expect(wrapper.find({ name: 'delete-campaign' })).toHaveLength(1);
    });
});
