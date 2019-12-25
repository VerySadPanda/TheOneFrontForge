import React from 'react';
import { Dropdown, Button } from 'antd';

import Overlay from './Overlay';

const UserDropdown = () => (
    <Dropdown overlay={<Overlay />}>
        <Button icon="user" />
    </Dropdown>
);

export default UserDropdown;
