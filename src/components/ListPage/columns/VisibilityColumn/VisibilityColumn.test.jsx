import React from 'react';
import { shallow } from 'enzyme';
import { Icon } from 'antd';

import renderVisibilityColum, { VisibilityColumn } from './VisibilityColumn';

describe('<VisibilityColumn>', () => {
    const props = {
        status: 'draft',
    };

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<VisibilityColumn {...props} />);
    });

    it('renders the icon with the mapped icon', () => {
        expect(wrapper.find(Icon).prop('type')).toEqual('build');
    });

    it('renders the icon with an unknown icon', () => {
        const propTypeWarningMock = jest.spyOn(console, 'error').mockImplementation();
        wrapper.setProps({ status: 'notAPanda' });

        expect(wrapper.find(Icon).prop('type')).toEqual('question');
        expect(propTypeWarningMock).toHaveBeenCalledTimes(1);

        propTypeWarningMock.mockRestore();
    });

    it('renders using the render function', () => {
        const renderWrapper = shallow(renderVisibilityColum('draft'));

        expect(renderWrapper.find(Icon).prop('type')).toEqual('build');
    });
});
