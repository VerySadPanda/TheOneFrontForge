import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Col, Input } from 'antd';

import classNames from './styles.scss';

const TextFilter = ({
    name,
    label,
    value,
    span,
    md,
    sm,
    xs,
    lg,
    disabled,
    onChange,
}) => {
    const handleChange = useCallback((event) => {
        const { value: newValue } = event.target;

        onChange(name, newValue);
    }, [name, onChange]);

    return (
        <Col
            name={`text-field-${name}`}
            className={classNames.textInput}
            span={span}
            md={md}
            sm={sm}
            xs={xs}
            lg={lg}
        >
            <Input
                addonBefore={label}
                value={value || ''}
                onChange={handleChange}
                disabled={disabled}
                allowClear
            />
        </Col>
    );
};

TextFilter.propTypes = {
    label: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    span: PropTypes.number,
    md: PropTypes.number,
    sm: PropTypes.number,
    xs: PropTypes.number,
    lg: PropTypes.number,

    /**
     * @param {string} name
     * @param {string} value
     */
    onChange: PropTypes.func.isRequired,
};

TextFilter.defaultProps = {
    disabled: false,
    lg: undefined,
    md: undefined,
    sm: undefined,
    span: undefined,
    value: undefined,
    xs: undefined,
};

export default React.memo(TextFilter);
