import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';

import { getFilterFromType } from './utils';
import { filtersType } from '../../proptypes';

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
    defaultValues: PropTypes.object,
    filters: filtersType,
    onChange: PropTypes.func.isRequired,
};

PageFilters.defaultProps = {
    defaultValues: {},
    filters: [],
};

export default React.memo(PageFilters);
