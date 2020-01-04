import React from 'react';
import Proptypes from 'prop-types';

import LinkColumn from '../LinkColumn';

export const OrganizationColumn = ({ id, name }) => (
    <LinkColumn
        id={id}
        name={name}
        baseRoute="organization"
    />
);

OrganizationColumn.propTypes = {
    id: Proptypes.string,
    name: Proptypes.string,
};

OrganizationColumn.defaultProps = {
    id: undefined,
    name: undefined,
};

// eslint-disable-next-line react/no-multi-comp
const renderColumn = (organization) => <OrganizationColumn {...organization} />;

export default renderColumn;
