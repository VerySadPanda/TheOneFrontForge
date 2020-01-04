import React from 'react';
import Proptypes from 'prop-types';

import LinkColumn from '../LinkColumn';

export const LocationColumn = ({ id, name }) => (
    <LinkColumn
        id={id}
        name={name}
        baseRoute="location"
    />
);

LocationColumn.propTypes = {
    id: Proptypes.string,
    name: Proptypes.string,
};

LocationColumn.defaultProps = {
    id: undefined,
    name: undefined,
};

// eslint-disable-next-line react/no-multi-comp
const renderColumn = (location) => <LocationColumn {...location} />;

export default renderColumn;
