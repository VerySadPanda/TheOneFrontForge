import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

import Layout from './Layout';

describe('<Layout>', () => {
    const props = {
        children: <div name="test-child" />,
    };

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Layout {...props} />);
    });

    it('renders the header', () => {
        expect(wrapper.find(Header)).toHaveLength(1);
    });

    it('renders the sidebar', () => {
        expect(wrapper.find(Sidebar)).toHaveLength(1);
    });

    it('renders the body', () => {
        expect(wrapper.find({ name: 'test-child' })).toHaveLength(1);
    });

    it('renders the footer', () => {
        expect(wrapper.find(Footer)).toHaveLength(1);
    });

    it('does not render the sidebar mask', () => {
        expect(wrapper.find({ name: 'sidebar-mask' })).toHaveLength(0);
    });

    it('renders the sidebar mask when the menu is opened', () => {
        wrapper.find(Header).simulate('openSidebar');
        wrapper.update();

        expect(wrapper.find({ name: 'sidebar-mask' })).toHaveLength(1);
    });

    it('closes the sidebar when ', () => {
        wrapper.find(Header).simulate('openSidebar');
        wrapper.find({ name: 'sidebar-mask' }).simulate('click');

        expect(wrapper.find({ name: 'sidebar-mask' })).toHaveLength(0);
    });
});
