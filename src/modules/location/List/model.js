import store from 'src/rematch/store';
import createListModel from 'src/rematch/createListModel';

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

const queryList = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { ok: true, response: { items: dummyData, count: dummyData.length } };
};

const model = createListModel('locationList', queryList);

store.model(model);

export default model;
