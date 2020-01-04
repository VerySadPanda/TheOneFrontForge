import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { Icon } from 'antd';

import listMessages from '../../../messages';
import { visibilityStatusToData } from '../../../utils';

import RadioFilter from '../RadioFilter';

const VisibilityFilter = ({ ...filterProps }) => {
    const { formatMessage } = useIntl();
    const options = Object.keys(visibilityStatusToData).map((key) => {
        const { icon, message } = visibilityStatusToData[key];

        return { name: key, label: <Icon type={icon} />, tooltip: formatMessage(message) };
    });

    const allOption = { name: 'all', label: formatMessage(listMessages.all) };

    return (
        <RadioFilter
            options={[allOption].concat(options)}
            {...filterProps}
        />
    );
};

VisibilityFilter.propTypes = {
    label: PropTypes.node.isRequired,
    value: PropTypes.oneOf(Object.keys(visibilityStatusToData).concat('all')),
    disabled: PropTypes.bool,
    span: PropTypes.number,

    /**
     * @param {string} name
     * @param {boolean} value
     */
    onChange: PropTypes.func.isRequired,
};

VisibilityFilter.defaultProps = {
    disabled: false,
    span: undefined,
    value: null,
};

export default React.memo(VisibilityFilter);
