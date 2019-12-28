import React from 'react';
import { shallow } from 'enzyme';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Table } from 'antd';

import Title from '../Title';

import ListPage from './ListPage';
import errorMessages from '../../errorMessages';

const mockedList = jest.fn();
jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));

const headers = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
];

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

describe('<ListPage>', () => {
    const props = {
        modelName: 'test',
        title: 'Test title',
        headers,
    };

    beforeAll(() => {
        useDispatch.mockReturnValue({
            test: {
                list: mockedList,
            },
        });
    });

    describe('With data', () => {
        beforeAll(() => {
            useSelector.mockReturnValue({
                items: dummyData,
            });
        });

        let wrapper;
        beforeEach(() => {
            wrapper = shallow(<ListPage {...props} />);
        });

        afterEach(() => {
            mockedList.mockClear();
        });

        it('renders the title', () => {
            expect(wrapper.find(Title).text()).toEqual(props.title);
        });

        it('renders the table', () => {
            expect(wrapper.find(Table).prop('dataSource')).toEqual(dummyData);
        });

        it('fetches the lsit data', () => {
            expect(mockedList).toHaveBeenCalledTimes(1);
        });
    });

    describe('With errors', () => {
        beforeAll(() => {
            useSelector.mockReturnValue({
                errors: errorMessages.unknown,
            });
        });

        let wrapper;
        beforeEach(() => {
            wrapper = shallow(<ListPage {...props} />);
        });

        it('renders the error alert when a state error is given', () => {
            expect(wrapper.find(Alert)).toHaveLength(1);
        });

        it('renders the list without data', () => {
            expect(wrapper.find(Table).prop('dataSource')).toEqual([]);
        });
    });
});
