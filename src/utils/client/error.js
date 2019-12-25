import errorMessages from '../../errorMessages';

/**
 * @param {number|string} statusCode
 */
export const getStatusErrorMessage = (statusCode) => {
    switch (statusCode) {
    case 404:
    case '404':
        return errorMessages.notFound;

    case 500:
    case '500':
        return errorMessages.internalServer;

    default:
        return errorMessages.unknown;
    }
};

export const getReasonErrorMessage = (reason) => errorMessages[reason] || errorMessages.unknown;

export default {
    getStatusErrorMessage,
};
