import React from 'react';
import { shallow } from 'enzyme';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Table } from 'antd';
import * as nextRouter from 'next/router';

import Title from '../Title';
import errorMessages from '../../errorMessages';

import ListPage, { defaultListSelect } from './ListPage';
import PageFilters from './filters/PageFilters';

jest.useFakeTimers();

const mockedList = jest.fn();
jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));

const pushMock = jest.fn();
const mockQuery = { name: 'Bob', age: 12 };
nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({
    query: mockQuery,
    push: pushMock,
    pathname: '/test',
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

    afterEach(() => {
        pushMock.mockReset();
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

        it('renders the filters', () => {
            expect(wrapper.find(PageFilters)).toHaveLength(1);
        });

        it('renders the table', () => {
            expect(wrapper.find(Table).prop('dataSource')).toEqual(dummyData);
        });

        it('fetches the list of data', () => {
            expect(mockedList).toHaveBeenCalledTimes(1);
            expect(mockedList).toHaveBeenCalledWith(mockQuery);
        });

        it('updates the url filters on change', () => {
            const newQuery = { name: 'Henry', address: '32' };
            wrapper.find(PageFilters).simulate('change', newQuery);

            jest.runAllTimers();

            const expectedHref = { pathname: '/test', query: newQuery };

            expect(pushMock).toHaveBeenCalledWith(expectedHref, expectedHref, { shallow: true });
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

    describe('Without models', () => {
        it('loads errors', () => {
            const { items, errors } = defaultListSelect.listData();

            expect(items).toHaveLength(0);
            expect(errors.reason).toEqual(errorMessages.modelNotLoaded);
        });
    });
});
