import { defineMessages } from 'react-intl';

const basePath = 'global';

const messages = defineMessages({
    home: {
        id: `${basePath}.home`,
        defaultMessage: 'Home',
    },
    character: {
        id: `${basePath}.character`,
        defaultMessage: 'Characters',
    },
});

export default messages;
