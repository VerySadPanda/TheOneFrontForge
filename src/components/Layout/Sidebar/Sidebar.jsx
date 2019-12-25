import React, { useCallback } from 'react';
import { Menu, Icon } from 'antd';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import classnames from 'classnames';

import globalMessages from 'src/messages';
import Articles from '../../../utils/constants/articles';

import classNames from './styles.scss';

const { SubMenu } = Menu;

const quickAccessArticles = Object.keys(Articles).map((key) => Articles[key]).slice(0, 4);

const menuLinks = [
    {
        href: '/',
        message: globalMessages.home,
    },
    {
        href: '/article',
        message: globalMessages.articleTitle,
        subLinks: [
            ...quickAccessArticles,
            {
                href: '/article',
                message: globalMessages.article,
                icon: 'ellipsis',
            },
        ],
    },
    {
        href: '/timeline',
        message: globalMessages.timeline,
    },
];

const renderLinks = (links, router, formatMessage) => (
    links.map(({
        href,
        key = href,
        message,
        icon,
        subLinks,
    }) => {
        const handleClick = useCallback(({ domEvent: event }) => {
            router.push(href);

            event.stopPropagation();
        }, []);

        if (!subLinks) {
            return (
                <Menu.Item
                    key={key}
                    onClick={handleClick}
                >
                    {icon && <Icon type={icon} />}

                    {formatMessage(message)}
                </Menu.Item>
            );
        }

        return (
            <SubMenu
                key={key}
                title={formatMessage(message)}
                onTitleClick={handleClick}
                className={classnames(classNames.subMenu, { [classNames.collapsible]: !href })}
            >
                {renderLinks(subLinks, router, formatMessage)}
            </SubMenu>
        );
    })
);

const Sidebar = () => {
    const { formatMessage } = useIntl();
    const router = useRouter();

    return (
        <Menu
            className={classNames.sidebar}
            defaultSelectedKeys={[router.asPath]}
            defaultOpenKeys={['/article']}
            mode="inline"
        >
            {renderLinks(menuLinks, router, formatMessage)}
        </Menu>
    );
};

export default Sidebar;
