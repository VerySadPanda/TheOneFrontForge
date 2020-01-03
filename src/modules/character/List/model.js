import store from '../../../rematch/store';
import createListModel from '../../../rematch/createListModel';

const dummyData = [
    {
        id: '1',
        name: 'Mike',
        location: {
            id: '1',
            name: 'City of The Horizon',
        },
        organization: {
            id: '1',
            name: 'The keepers',
        },
    },
    {
        id: '2',
        name: 'John',
        location: {
            id: '2',
            name: 'The Tomb of Ancients',
        },
        organization: {
            id: '1',
            name: 'The keepers',
        },
    },
    {
        id: '3',
        name: 'Peter',
        location: null,
        organization: null,
    },
];

/* istanbul ignore next */
const queryList = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { ok: true, response: { items: dummyData, count: dummyData.length } };
};

const model = createListModel('characterList', queryList);

store.model(model);

export default model;
