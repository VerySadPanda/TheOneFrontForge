import store from '../../../rematch/store';
import createListModel from '../../../rematch/createListModel';

const dummyData = [
    {
        id: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
    },
    {
        id: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
    },
];

/* istanbul ignore next */
const queryList = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { ok: true, response: { items: dummyData, count: dummyData.length } };
};

const model = createListModel('organizationList', queryList);

store.model(model);

export default model;
