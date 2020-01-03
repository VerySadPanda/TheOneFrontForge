import { defineMessages } from 'react-intl';

const basePath = 'global';

const messages = defineMessages({
    name: {
        id: `${basePath}.name`,
        defaultMessage: 'Name',
    },
    status: {
        id: `${basePath}.status`,
        defaultMessage: 'Status',
    },
    location: {
        id: `${basePath}.location`,
        defaultMessage: 'Location',
    },
    organization: {
        id: `${basePath}.organization`,
        defaultMessage: 'Organization',
    },
});

export default messages;
