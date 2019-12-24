import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'antd';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';

import moduleMessages from '../../../messages';

const links = [
    {
        href: '/',
        message: moduleMessages.home,
        icon: 'mail',
    },
    {
        href: '/character',
        message: moduleMessages.character,
        icon: 'mail',
    },
];

const Sidebar = ({ className }) => {
    const { formatMessage } = useIntl();
    const router = useRouter();

    const currentPage = links.find(({ href }) => href === router.pathname);

    return (
        <Menu
            className={className}
            defaultSelectedKeys={[currentPage.href]}
        >
            {
                links.map(({ href, message, icon }) => {
                    const handleClick = useCallback(() => router.push(href), []);

                    return (
                        <Menu.Item
                            key={href}
                            onClick={handleClick}
                        >
                            <Icon type={icon} />

                            {formatMessage(message)}
                        </Menu.Item>
                    );
                })
            }
        </Menu>
    );
};

Sidebar.propTypes = {
    className: PropTypes.string,
};

Sidebar.defaultProps = {
    className: '',
};

export default Sidebar;
