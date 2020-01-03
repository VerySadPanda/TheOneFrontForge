import errorMessages from '../../errorMessages';

import { getReasonErrorMessage, getStatusErrorMessage } from './error';

describe('Client Error Utils', () => {
    describe('getStatusErrorMessage', () => {
        it('shows the panda not found error', () => {
            const error = getStatusErrorMessage(404);

            expect(error).toEqual(errorMessages.notFound);
        });

        it('shows the panda is too sad to do anything error', () => {
            const error = getStatusErrorMessage(500);

            expect(error).toEqual(errorMessages.internalServer);
        });

        it('defaults to unknown error', () => {
            const error = getStatusErrorMessage(400);

            expect(error).toEqual(errorMessages.unknown);
        });
    });

    describe('getReasonErrorMessage', () => {
        it('get the error reason', () => {
            const error = getReasonErrorMessage('internalServer');

            expect(error).toEqual(errorMessages.internalServer);
        });

        it('defaults to unknown error', () => {
            const error = getReasonErrorMessage('thisIsNotThePandaYouAreLookingFor');

            expect(error).toEqual(errorMessages.unknown);
        });
    });
});
