import { defineMessages } from 'react-intl';

const basePath = 'components.ListPage';

const messages = defineMessages({
    all: {
        id: `${basePath}.all`,
        defaultMessage: 'All',
    },
    unknown: {
        id: `${basePath}.unknown`,
        defaultMessage: 'Unknown',
    },
    draft: {
        id: `${basePath}.visibility.draft`,
        defaultMessage: 'Draft',
    },
    gmOnly: {
        id: `${basePath}.visibility.draft`,
        defaultMessage: 'GM only',
    },
    visible: {
        id: `${basePath}.visibility.draft`,
        defaultMessage: 'Visible',
    },
});

export default messages;
