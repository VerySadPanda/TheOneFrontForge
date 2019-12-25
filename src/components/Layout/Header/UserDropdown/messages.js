import { defineMessages } from 'react-intl';

const basePath = 'component.layout.header.userMenu';

const messages = defineMessages({
    settings: {
        id: `${basePath}.settings`,
        defaultMessage: 'User Settings',
    },
    logout: {
        id: `${basePath}.logout`,
        defaultMessage: 'Logout',
    },
});

export default messages;
