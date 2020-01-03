import React from 'react';
import Proptypes from 'prop-types';

import LinkColumn from '../LinkColumn';

const LocationColumn = ({ id, name }) => (
    <LinkColumn
        id={id}
        name={name}
        baseRoute="location"
    />
);

LocationColumn.propTypes = {
    id: Proptypes.string.isRequired,
    name: Proptypes.string.isRequired,
};

export default LocationColumn;
