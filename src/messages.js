import { defineMessages } from 'react-intl';

const basePath = 'global';

const messages = defineMessages({
    title: {
        id: `${basePath}.title`,
        defaultMessage: 'The One Forge',
    },
    home: {
        id: `${basePath}.home`,
        defaultMessage: 'Home',
    },
    articleTitle: {
        id: `${basePath}.article.title`,
        defaultMessage: 'Articles',
    },
    character: {
        id: `${basePath}.character`,
        defaultMessage: 'Characters',
    },
    location: {
        id: `${basePath}.location`,
        defaultMessage: 'Locations',
    },
    organization: {
        id: `${basePath}.organization`,
        defaultMessage: 'Organizations',
    },
    event: {
        id: `${basePath}.event`,
        defaultMessage: 'Events',
    },
    article: {
        id: `${basePath}.article`,
        defaultMessage: 'All',
    },
    timeline: {
        id: `${basePath}.timeline`,
        defaultMessage: 'Timeline',
    },
    copyright: {
        id: `${basePath}.copyright`,
        defaultMessage: '© All rights reserved to pandas',
    },
});

export default messages;
