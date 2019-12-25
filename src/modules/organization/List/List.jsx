import React from 'react';
import { useIntl } from 'react-intl';

import ListPage from 'src/components/ListPage/ListPage';
import globalMessages from 'src/messages';

import listModel from './model';

const headers = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
];

const List = () => {
    const { formatMessage } = useIntl();

    return (
        <ListPage
            title={formatMessage(globalMessages.organization)}
            headers={headers}
            modelName={listModel.name}
        />
    );
};

export default List;
