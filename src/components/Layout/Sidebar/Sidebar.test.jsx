import React from 'react';
import { shallow } from 'enzyme';
import * as nextRouter from 'next/router';

import Sidebar, { menuLinks } from './Sidebar';

const pushMock = jest.fn();
nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ push: pushMock, asPath: '/' }));

const mockEvent = { stopPropagation: jest.fn() };

describe('<Sidebar>', () => {
    const props = {
        opened: true,
    };

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Sidebar {...props} />);
    });

    afterEach(() => {
        pushMock.mockReset();
    });

    menuLinks.forEach(({ href, subLinks }) => {
        describe(`${href} link`, () => {
            it(`redirects to the "${href}" page`, () => {
                const link = wrapper.find({ name: href });

                if (subLinks) {
                    expect(link).toHaveLength(2);

                    link.first().simulate('titleClick', { domEvent: mockEvent });
                } else {
                    expect(link).toHaveLength(1);

                    link.simulate('click', { domEvent: mockEvent });
                }

                expect(pushMock).toHaveBeenCalledWith(href);
            });

            if (subLinks) {
                subLinks.forEach(({ href: subLinkHref }) => {
                    describe(`${subLinkHref} sub-link`, () => {
                        it(`redirects to the "${subLinkHref}" page`, () => {
                            const subLink = wrapper.find({ name: subLinkHref });

                            if (href === subLinkHref) {
                                expect(subLink).toHaveLength(2);

                                subLink.at(1).simulate('click', { domEvent: mockEvent });
                            } else {
                                expect(subLink).toHaveLength(1);

                                subLink.simulate('click', { domEvent: mockEvent });
                            }

                            expect(pushMock).toHaveBeenCalledWith(subLinkHref);
                        });
                    });
                });
            }
        });
    });
});
