import React from 'react';
import { Menu } from 'antd';
import { useIntl } from 'react-intl';

import messages from './messages';

const Overlay = () => {
    const { formatMessage } = useIntl();

    return (
        <Menu>
            <Menu.Item name="user-settings">
                {formatMessage(messages.settings)}
            </Menu.Item>

            <Menu.Item name="user-logout">
                {formatMessage(messages.logout)}
            </Menu.Item>
        </Menu>
    );
};

export default React.memo(Overlay);
