import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table, Alert } from 'antd';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';

import store from 'src/rematch/store';

import Title from '../Title';
import { getReasonErrorMessage } from '../../utils/client/error';

const ListPage = ({
    title,
    headers,
    modelName,
    rowKey,
}) => {
    const { formatMessage } = useIntl();
    const { [modelName]: { list } } = useDispatch();
    const { items, errors } = useSelector(store.select[modelName].listData);
    const loading = useSelector(store.select[modelName].isLoading);

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

export default ListPage;
