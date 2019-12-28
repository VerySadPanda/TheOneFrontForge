import React from 'react';
import { PageHeader } from 'antd';

import Title from './Title';
import UserDropdown from './UserDropdown';
import CampaignDropdown from './CampaignDropdown';

import classNames from './styles.scss';

const menus = [
    <CampaignDropdown key="campaign" />,
    <UserDropdown key="user" />,
];

const Header = () => (
    <PageHeader
        className={classNames.header}
        title={<Title />}
        extra={menus}
    />
);

export default React.memo(Header);
