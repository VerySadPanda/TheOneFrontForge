import React from 'react';
import { useIntl, FormattedMessage } from 'react-intl';

import ListPage, { LocationColumn, OrganizationColumn, VisibilityColumn } from '../../../components/ListPage';
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
        title: <FormattedMessage {...messages.location} />,
        dataIndex: 'location',
        key: 'location',
        render: LocationColumn,
    },
    {
        title: <FormattedMessage {...messages.organization} />,
        dataIndex: 'organization',
        key: 'organization',
        render: OrganizationColumn,
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
        label: <FormattedMessage {...messages.organization} />,
        name: 'organization',
        type: 'text',
        sm: 24,
        md: 12,
    },
    {
        label: <FormattedMessage {...messages.location} />,
        name: 'location',
        type: 'text',
        sm: 24,
        md: 12,
    },
];

const List = () => {
    const { formatMessage } = useIntl();

    return (
        <ListPage
            title={formatMessage(globalMessages.character)}
            filters={filters}
            headers={headers}
            modelName={listModel.name}
        />
    );
};

export default List;
