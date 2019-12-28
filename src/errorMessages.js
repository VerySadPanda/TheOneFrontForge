import { defineMessages } from 'react-intl';

const basePath = 'error';

const errorMessages = defineMessages({
    notFound: {
        id: `${basePath}.notFound`,
        defaultMessage: 'But? Where is my panda?... You promised me a panda!',
    },
    internalServer: {
        id: `${basePath}.internalServer`,
        defaultMessage: 'The panda is currently in depression. Please try again later,',
    },
    unknown: {
        id: `${basePath}.unknown`,
        defaultMessage: 'It just all goes according to my evil plans!',
    },
    modelNotLoaded: {
        id: `${basePath}.modelNotLoaded`,
        defaultMessage: 'Model was not loaded.',
    },
});

export default errorMessages;
