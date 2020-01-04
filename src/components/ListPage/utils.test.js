import { visibilityStatusToData, getVisibilityStatusData } from './utils';
import messages from './messages';

describe('ListPage Utils', () => {
    describe('getVisibilityStatusData', () => {
        Object.keys(visibilityStatusToData).forEach((name) => {
            it(`gets the message and icon for ${name}`, () => {
                expect(getVisibilityStatusData(name)).toEqual(visibilityStatusToData[name]);
            });
        });

        it('defaults to unknown', () => {
            expect(getVisibilityStatusData('notAPanda')).toEqual({ icon: 'question', message: messages.unknown });
        });
    });
});
