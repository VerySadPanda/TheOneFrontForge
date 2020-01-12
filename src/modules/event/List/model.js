import store from '../../../rematch/store';
import createListModel from '../../../rematch/createListModel';

const dummyData = [
    {
        id: '1',
        name: 'The panda sees a bamboo',
        date: 943,
        type: 'Economic',
        status: 'gm',
    },
    {
        id: '2',
        name: '?',
        date: 949,
        type: 'Military',
        status: 'draft',
    },
    {
        id: '3',
        name: 'The panda is sad',
        date: 954,
        type: 'Civil War',
        status: 'visible',
    },
];

/* istanbul ignore next */
const queryList = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { ok: true, response: { items: dummyData, count: dummyData.length } };
};

const model = createListModel('eventList', queryList);

store.model(model);

export default model;
