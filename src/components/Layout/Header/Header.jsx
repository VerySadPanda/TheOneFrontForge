import React from 'react';
import PropTypes from 'prop-types';
import { PageHeader } from 'antd';

import Title from './Title';
import UserDropdown from './UserDropdown';
import CampaignDropdown from './CampaignDropdown';

import classNames from './styles.scss';

const menus = [
    <CampaignDropdown key="campaign" />,
    <UserDropdown key="user" />,
];

const Header = ({ onOpenSidebar }) => (
    <PageHeader
        className={classNames.header}
        title={<Title onOpenSidebar={onOpenSidebar} />}
        extra={menus}
    />
);

Header.propTypes = {
    onOpenSidebar: PropTypes.func.isRequired,
};

export default React.memo(Header);
