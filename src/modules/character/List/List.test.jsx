import React from 'react';
import { shallow } from 'enzyme';

import ListPage from '../../../components/ListPage';

import List from './List';
import model from './model';

describe('<List>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<List />);
    });

    it('renders the list page with the correct model name', () => {
        expect(wrapper.find(ListPage).prop('modelName')).toEqual(model.name);
    });
});
