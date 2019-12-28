import React from 'react';
import { Dropdown, Button } from 'antd';

import Overlay from './Overlay';

const CampaignDropdown = () => (
    <Dropdown overlay={<Overlay />}>
        <Button icon="reconciliation" />
    </Dropdown>
);

export default React.memo(CampaignDropdown);
