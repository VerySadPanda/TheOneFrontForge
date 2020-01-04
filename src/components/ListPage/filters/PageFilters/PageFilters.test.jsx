import React from 'react';
import { shallow } from 'enzyme';

import PageFilters from './PageFilters';

describe('<PageFilters>', () => {
    const filters = [
        {
            label: 'Test 1',
            name: 'test1',
            type: 'text',
        },
        {
            label: 'Test 2',
            name: 'test2',
            type: 'visibility',
        },
        {
            label: 'Test 3',
            name: 'test3',
            type: 'radio',
        },
    ];

    const props = {
        defaultValues: {
            test1: 'value',
            test2: null,
        },
        filters,
        onChange: jest.fn(),
    };

    describe('With default values', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(<PageFilters {...props} />);
        });

        filters.forEach(({ name, type }) => {
            describe(`Filter ${name} (${type})`, () => {
                it('renders', () => {
                    expect(wrapper.find({ name })).toHaveLength(1);
                });

                it('gets the value from the default values', () => {
                    expect(wrapper.find({ name }).prop('value')).toEqual(props.defaultValues[name]);
                });

                it('triggers the change function', () => {
                    wrapper.find({ name }).simulate('change', name, 'new-value');

                    expect(props.onChange).toHaveBeenCalledWith({ ...props.defaultValues, [name]: 'new-value' });
                });
            });
        });

        it('does not render without filter', () => {
            wrapper.setProps({ filters: null });

            expect(wrapper.html()).toEqual(null);
        });
    });

    describe('Without default values', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallow((
                <PageFilters
                    {...props}
                    defaultValues={null}
                />
            ));
        });

        filters.forEach(({ name, type }) => {
            describe(`Filter ${name} (${type})`, () => {
                it('renders with value set to undefined', () => {
                    expect(wrapper.find({ name }).prop('value')).toEqual(undefined);
                });
            });
        });
    });
});
