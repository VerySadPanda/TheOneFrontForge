import React from 'react';
import { Icon } from 'antd';

import PandaSVG from './PandaSVG';

const PandaIcon = (props) => (
    <Icon
        component={PandaSVG}
        {...props}
    />
);

export default PandaIcon;
