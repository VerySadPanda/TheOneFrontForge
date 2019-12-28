import React from 'react';
import { Menu } from 'antd';
import { useIntl } from 'react-intl';

import messages from './messages';

const Overlay = () => {
    const { formatMessage } = useIntl();

    return (
        <Menu>
            <Menu.Item name="edit-campaign">
                {formatMessage(messages.edit)}
            </Menu.Item>

            <Menu.Item name="list-campaign">
                {formatMessage(messages.list)}
            </Menu.Item>

            <Menu.Item name="delete-campaign">
                {formatMessage(messages.delete)}
            </Menu.Item>
        </Menu>
    );
};

export default React.memo(Overlay);
