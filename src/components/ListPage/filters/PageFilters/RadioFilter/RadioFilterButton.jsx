import React from 'react';
import PropTypes from 'prop-types';
import { Radio, Tooltip } from 'antd';


const RadioFilterButton = ({
    name,
    label,
    tooltip,
}) => {
    const button = (
        <Radio.Button value={name}>
            {label}
        </Radio.Button>
    );

    if (!tooltip) {
        return button;
    }

    return (
        <Tooltip title={tooltip}>
            {button}
        </Tooltip>
    );
};

RadioFilterButton.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.node.isRequired,
    tooltip: PropTypes.node,
};

RadioFilterButton.defaultProps = {
    tooltip: null,
};

export default React.memo(RadioFilterButton);
