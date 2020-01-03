import TextFilter from './TextFilter';
import RadioFilter from './RadioFilter';
import VisibilityStatusFilter from './VisibilityStatusFilter';

import { getFilterFromType } from './utils';

describe('PageFilters Utils', () => {
    let consoleMock;
    beforeAll(() => {
        consoleMock = jest.spyOn(console, 'warn').mockImplementation();
    });

    afterAll(() => {
        consoleMock.mockRestore();
    });

    describe('getFilterFromType', () => {
        it('returns the text filter for "text" type', () => {
            const component = getFilterFromType('text');

            expect(component).toEqual(TextFilter);
        });

        it('returns the radio filter for "radio" type', () => {
            const component = getFilterFromType('radio');

            expect(component).toEqual(RadioFilter);
        });

        it('returns the visibility status filter for "visibilityStatus" type', () => {
            const component = getFilterFromType('visibilityStatus');

            expect(component).toEqual(VisibilityStatusFilter);
        });

        it('returns the text filter by default and warns', () => {
            const component = getFilterFromType('notExisting');

            expect(component).toEqual(TextFilter);
            expect(consoleMock).toHaveBeenCalledTimes(1);
        });
    });
});
