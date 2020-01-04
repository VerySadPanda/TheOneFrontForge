import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Col, Radio } from 'antd';

import classNames from './styles.scss';
import RadioFilterButton from './RadioFilterButton';

const RadioFilter = ({
    name,
    label,
    value,
    span,
    md,
    sm,
    xs,
    lg,
    disabled,
    options,
    onChange,
}) => {
    const handleChange = useCallback((event) => {
        const { value: newValue } = event.target;

        onChange(name, newValue);
    }, [name, onChange]);

    return (
        <Col
            name={`radio-field-${name}`}
            className={classNames.input}
            span={span}
            md={md}
            sm={sm}
            xs={xs}
            lg={lg}
        >
            <div
                name="radio-label"
                className={classnames(classNames.title, 'ant-input-group-addon')}
            >
                {label}
            </div>

            <Radio.Group
                disabled={disabled}
                defaultValue={value}
                onChange={handleChange}
            >
                {
                    options.map((option) => (
                        <RadioFilterButton
                            key={option.name}
                            {...option}
                        />
                    ))
                }
            </Radio.Group>
        </Col>
    );
};

RadioFilter.propTypes = {
    label: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    span: PropTypes.number,
    md: PropTypes.number,
    sm: PropTypes.number,
    xs: PropTypes.number,
    lg: PropTypes.number,
    options: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.node.isRequired,
    })).isRequired,

    /**
     * @param {string} name
     * @param {boolean} value
     */
    onChange: PropTypes.func.isRequired,
};

RadioFilter.defaultProps = {
    disabled: false,
    lg: undefined,
    md: undefined,
    sm: undefined,
    span: undefined,
    value: undefined,
    xs: undefined,
};

export default React.memo(RadioFilter);
