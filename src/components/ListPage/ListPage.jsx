import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Table, Alert } from 'antd';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import store from '../../rematch/store';

import Title from '../Title';
import { getReasonErrorMessage } from '../../utils/client/error';
import errorMessages from '../../errorMessages';
import { childrenType } from '../../proptypes';
import PageFilters from './filters/PageFilters';

export const defaultListSelect = {
    listData: () => ({
        items: [],
        errors: { reason: errorMessages.modelNotLoaded },
    }),
    isLoading: false,
};

const ListPage = ({
    title,
    filters,
    headers,
    modelName,
    rowKey,
}) => {
    // In case the developer did not import the model, shows the error nicely.
    const listSelect = store.select[modelName] || defaultListSelect;

    const { formatMessage } = useIntl();
    const router = useRouter();
    const { [modelName]: { list } } = useDispatch();
    const { items, errors } = useSelector(listSelect.listData);
    const loading = useSelector(listSelect.isLoading);

    useEffect(() => {
        list(router.query);
    }, [router.query]);

    let changeTimeout;
    const handleChange = useCallback((filterDatum) => {
        clearTimeout(changeTimeout);

        changeTimeout = setTimeout(() => {
            const href = { pathname: router.pathname, query: filterDatum };
            router.push(href, href, { shallow: true });
        }, 500);
    }, [changeTimeout]);

    return (
        <>
            <Title>
                {title}
            </Title>

            <PageFilters
                defaultValues={router.query}
                filters={filters}
                onChange={handleChange}
            />

            {
                errors && (
                    <Alert
                        message={formatMessage(getReasonErrorMessage(errors.reason))}
                        type="error"
                        showIcon
                    />
                )
            }

            <Table
                columns={headers}
                dataSource={items || []}
                loading={loading}
                rowKey={rowKey}
            />
        </>
    );
};

ListPage.propTypes = {
    filters: childrenType,
    headers: PropTypes.arrayOf(PropTypes.object).isRequired,
    modelName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rowKey: PropTypes.string,
};

ListPage.defaultProps = {
    filters: null,
    rowKey: 'id',
};

export default React.memo(ListPage);
