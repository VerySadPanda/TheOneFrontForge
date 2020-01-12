import { defineMessages } from 'react-intl';

const basePath = 'modules.event';

const messages = defineMessages({
    name: {
        id: `${basePath}.name`,
        defaultMessage: 'Name',
    },
    status: {
        id: `${basePath}.status`,
        defaultMessage: 'Status',
    },
    type: {
        id: `${basePath}.type`,
        defaultMessage: 'Type',
    },
    date: {
        id: `${basePath}.date`,
        defaultMessage: 'Date',
    },
});

export default messages;
