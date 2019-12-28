import React from 'react';
import { shallow } from 'enzyme';

import PandaSVG from './PandaSVG';

describe('<PandaSVG>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<PandaSVG />);
    });

    it('renders the svg', () => {
        expect(wrapper.find('svg')).toHaveLength(1);
    });
});
