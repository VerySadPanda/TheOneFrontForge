import React from 'react';
import Proptypes from 'prop-types';

import LinkColumn from '../LinkColumn';

const OrganizationColumn = ({ id, name }) => (
    <LinkColumn
        id={id}
        name={name}
        baseRoute="organization"
    />
);

OrganizationColumn.propTypes = {
    id: Proptypes.string.isRequired,
    name: Proptypes.string.isRequired,
};

export default OrganizationColumn;
