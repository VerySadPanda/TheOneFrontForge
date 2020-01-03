/**
 * Generate the default list model
 *
 * @param {string} name
 * @param {(query: object) => Promise<void>} serviceList
 */
const createListModel = (name, serviceList) => ({
    name,

    state: {
        items: [],
        count: 0,
        query: null,
        errors: null,
    },

    reducers: {
        setList: (state, { items, count }) => ({ ...state, items, count }),
        setQuery: (state, query) => ({ ...state, query }),
        resetErrors: (state) => ({ ...state, errors: null }),
        setErrors: (state, { errors }) => ({ ...state, errors }),
    },

    effects: ({ [name]: self }) => ({
        list: async (query) => {
            self.resetErrors();

            const { ok, response, errors } = await serviceList(query);

            if (ok) {
                self.setList({ items: response.items, count: response.count });
                self.setQuery(query);
            } else {
                self.setErrors({ errors });
            }

            return response;
        },

        refresh: async (_, { [name]: { query } }) => self.list(query),
    }),

    selectors: (slice) => ({
        listData: () => slice((listData) => listData),
        isLoading: () => (state) => state.loading.models[name],
    }),
});

export default createListModel;
