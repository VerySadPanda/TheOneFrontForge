
import { init } from '@rematch/core';
import selectPlugin from '@rematch/select';
import createLoadingPlugin from '@rematch/loading';

import createListModel from './createListModel';

const response = {
    ok: true,
    response: {
        items: [{ test: true }],
        count: 1,
    },
};

const errorResponse = {
    ok: false,
    errors: 'test',
};

describe('createListModel', () => {
    const mockedServiceCall = jest.fn();
    const model = createListModel('test', mockedServiceCall);

    let store;
    beforeEach(() => {
        store = init({
            models: { test: model },
            plugins: [selectPlugin(), createLoadingPlugin()],
        });
    });

    it('sets the model name', () => {
        expect(model.name).toEqual('test');
    });

    it('sets the initial state', () => {
        expect(model.state).toEqual({
            items: [],
            count: 0,
            query: null,
            errors: null,
        });
    });

    describe('Reducers', () => {
        it('sets the list', () => {
            store.dispatch.test.setList({ items: [{ test: true }], count: 1 });

            expect(store.getState().test).toEqual({
                ...model.state,
                items: [{ test: true }],
                count: 1,
            });
        });

        it('sets the query', () => {
            store.dispatch.test.setQuery({ name: 'Antony' });

            expect(store.getState().test).toEqual({ ...model.state, query: { name: 'Antony' } });
        });

        it('sets the errors', () => {
            store.dispatch.test.setErrors({ errors: 'test' });

            expect(store.getState().test).toEqual({ ...model.state, errors: 'test' });
        });

        it('resets the errors', () => {
            store.dispatch.test.setErrors({ errors: 'test' });

            store.dispatch.test.resetErrors({ ...model.state, errors: 'test' });

            expect(store.getState().test).toEqual({ ...model.state, errors: null });
        });
    });

    describe('Effects', () => {
        describe('list', () => {
            it('sets the list and query', async () => {
                mockedServiceCall.mockReturnValueOnce(response);

                await store.dispatch.test.list({ name: 'John' });

                expect(store.getState().test).toEqual({
                    ...model.state,
                    items: [{ test: true }],
                    count: 1,
                    query: { name: 'John' },
                });
            });

            it('sets the errors', async () => {
                mockedServiceCall.mockReturnValueOnce(errorResponse);

                await store.dispatch.test.list({ name: 'John' });

                expect(store.getState().test).toEqual({ ...model.state, errors: 'test' });
            });
        });

        describe('refresh', () => {
            it('sets the list', async () => {
                mockedServiceCall.mockReturnValueOnce(response);

                await store.dispatch.test.refresh();

                expect(store.getState().test).toEqual({
                    ...model.state,
                    items: [{ test: true }],
                    count: 1,
                });
            });

            it('sets the errors', async () => {
                mockedServiceCall.mockReturnValueOnce(errorResponse);

                await store.dispatch.test.refresh();

                expect(store.getState().test).toEqual({ ...model.state, errors: 'test' });
            });
        });

        describe('Selectors', () => {
            const mockedSlice = (cb) => cb(store.getState().test);

            it('queries the loading state', async () => {
                const isLoading = model.selectors(mockedSlice).isLoading()(store.getState());

                expect(isLoading).toBe(false);
            });

            it('queries the list data', async () => {
                const data = model.selectors(mockedSlice).listData();

                expect(data).toEqual(store.getState().test);
            });
        });
    });
});
