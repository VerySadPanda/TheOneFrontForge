import React from 'react';
import { Menu } from 'antd';
import { useIntl } from 'react-intl';

import messages from './messages';

const Overlay = () => {
    const { formatMessage } = useIntl();

    return (
        <Menu>
            <Menu.Item>
                {formatMessage(messages.edit)}
            </Menu.Item>

            <Menu.Item>
                {formatMessage(messages.list)}
            </Menu.Item>

            <Menu.Item>
                {formatMessage(messages.delete)}
            </Menu.Item>
        </Menu>
    );
};

export default Overlay;
