import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { Icon, Tooltip } from 'antd';

import { getVisibilityStatusData, visibilityStatusToData } from '../../utils';

export const VisibilityColumn = ({ status }) => {
    const { formatMessage } = useIntl();
    const { icon, message } = getVisibilityStatusData(status);

    return (
        <Tooltip title={formatMessage(message)}>
            <Icon type={icon} />
        </Tooltip>
    );
};

VisibilityColumn.propTypes = {
    status: PropTypes.oneOf(Object.keys(visibilityStatusToData)).isRequired,
};

// eslint-disable-next-line react/no-multi-comp
const renderColumn = (status) => <VisibilityColumn status={status} />;

export default renderColumn;
