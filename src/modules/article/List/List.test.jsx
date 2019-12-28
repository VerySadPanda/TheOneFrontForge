import React from 'react';
import { shallow } from 'enzyme';

import CardGrid from '../../../components/CardGrid';
import Title from '../../../components/Title';
import Articles from '../../../utils/constants/articles';

import List from './List';

const articles = Object.keys(Articles).map((key) => Articles[key]);

describe('<List>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<List />);
    });

    it('renders the title', () => {
        expect(wrapper.find(Title)).toHaveLength(1);
    });

    it('renders the card grid with the article list', () => {
        expect(wrapper.find(CardGrid).prop('data')).toEqual(articles);
    });
});
