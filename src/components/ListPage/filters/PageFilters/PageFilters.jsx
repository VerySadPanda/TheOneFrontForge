import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';

import { getFilterFromType } from './utils';

import classNames from './styles.scss';

const PageFilters = ({ defaultValues, filters, onChange }) => {
    const [values, setValues] = useState(defaultValues || {});

    const handleChange = useCallback((key, value) => {
        const newValues = { ...values, [key]: value };

        setValues(newValues);
        onChange(newValues);
    }, [values, onChange]);

    if (!filters || filters.length === 0) {
        return null;
    }

    return (
        <Row
            className={classNames.pageFilters}
            name="list-filters"
        >
            {
                filters.map(({ name, type, ...filterProps }) => {
                    const FilterComponent = getFilterFromType(type);

                    return (
                        <FilterComponent
                            key={name}
                            name={name}
                            value={values[name]}
                            onChange={handleChange}
                            {...filterProps}
                        />
                    );
                })
            }
        </Row>
    );
};

PageFilters.propTypes = {
    defaultValues: PropTypes.objectOf(PropTypes.string),
    filters: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.node.isRequired,
        type: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            label: PropTypes.node.isRequired,
        })).isRequired,
        span: PropTypes.number,
        disabled: PropTypes.bool,
    })),
    onChange: PropTypes.func.isRequired,
};

PageFilters.defaultProps = {
    defaultValues: {},
    filters: [],
};

export default React.memo(PageFilters);
