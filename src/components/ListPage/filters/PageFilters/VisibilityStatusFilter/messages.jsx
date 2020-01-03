import { defineMessages } from 'react-intl';

const basePath = 'components.ListPage.filters.visibilityStatusFilter';

const messages = defineMessages({
    all: {
        id: `${basePath}.all`,
        defaultMessage: 'All',
    },
    draft: {
        id: `${basePath}.draft`,
        defaultMessage: 'Draft',
    },
    gmOnly: {
        id: `${basePath}.draft`,
        defaultMessage: 'GM only',
    },
    visible: {
        id: `${basePath}.draft`,
        defaultMessage: 'Visible',
    },
});

export default messages;
