import { defineMessages } from 'react-intl';

const basePath = 'component.layout.header.campaignMenu';

const messages = defineMessages({
    edit: {
        id: `${basePath}.edit`,
        defaultMessage: 'Edit Campaign',
    },
    list: {
        id: `${basePath}.list`,
        defaultMessage: 'All Campaigns',
    },
    delete: {
        id: `${basePath}.delete`,
        defaultMessage: 'Delete Campaign',
    },
});

export default messages;
