import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table, Alert } from 'antd';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';

import store from '../../rematch/store';

import Title from '../Title';
import { getReasonErrorMessage } from '../../utils/client/error';
import errorMessages from '../../errorMessages';

const defaultListSelect = {
    listData: () => ({
        items: [],
        errors: { reason: errorMessages.modelNotLoaded },
    }),
    isLoading: false,
};

const ListPage = ({
    title,
    headers,
    modelName,
    rowKey,
}) => {
    const { formatMessage } = useIntl();
    const { [modelName]: { list } } = useDispatch();

    // In case the developer did not import the model, shows the error nicely.
    const listSelect = store.select[modelName] || defaultListSelect;

    const { items, errors } = useSelector(listSelect.listData);
    const loading = useSelector(listSelect.isLoading);

    useEffect(() => {
        list();
    }, []);

    return (
        <>
            <Title>
                {title}
            </Title>

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
    headers: PropTypes.arrayOf(PropTypes.object).isRequired,
    modelName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rowKey: PropTypes.string,
};

ListPage.defaultProps = {
    rowKey: 'id',
};

export default React.memo(ListPage);
