import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import messages from './messages';

import RadioFilter from '../RadioFilter';

const VisibilityStatusFilter = ({ ...filterProps }) => {
    const { formatMessage } = useIntl();

    return (
        <RadioFilter
            options={[
                { name: null, label: formatMessage(messages.all) },
                { name: 'draft', label: formatMessage(messages.draft) },
                { name: 'gm', label: formatMessage(messages.gmOnly) },
                { name: 'visible', label: formatMessage(messages.visible) },
            ]}
            {...filterProps}
        />
    );
};

VisibilityStatusFilter.propTypes = {
    label: PropTypes.node.isRequired,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    span: PropTypes.number,

    /**
     * @param {string} name
     * @param {boolean} value
     */
    onChange: PropTypes.func.isRequired,
};

VisibilityStatusFilter.defaultProps = {
    disabled: false,
    span: undefined,
    value: null,
};

export default React.memo(VisibilityStatusFilter);
