import React from 'react';
import { useIntl, FormattedMessage } from 'react-intl';

import ListPage, { VisibilityColumn } from '../../../components/ListPage';
import globalMessages from '../../../messages';

import messages from './messages';
import listModel from './model';

const headers = [
    {
        title: <FormattedMessage {...messages.name} />,
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: <FormattedMessage {...messages.date} />,
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: <FormattedMessage {...messages.type} />,
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: <FormattedMessage {...messages.status} />,
        dataIndex: 'status',
        key: 'status',
        render: VisibilityColumn,
        width: '80px',
        align: 'center',
    },
];

const filters = [
    {
        label: <FormattedMessage {...messages.name} />,
        name: 'name',
        type: 'text',
        sm: 24,
        md: 12,
    },
    {
        label: <FormattedMessage {...messages.status} />,
        name: 'status',
        type: 'visibility',
        sm: 24,
        md: 12,
    },
    {
        label: <FormattedMessage {...messages.date} />,
        name: 'date',
        type: 'text',
        sm: 24,
        md: 12,
    },
    {
        label: <FormattedMessage {...messages.type} />,
        name: 'type',
        type: 'text',
        sm: 24,
        md: 12,
    },
];

const List = () => {
    const { formatMessage } = useIntl();

    return (
        <ListPage
            title={formatMessage(globalMessages.event)}
            headers={headers}
            filters={filters}
            modelName={listModel.name}
        />
    );
};

export default List;
