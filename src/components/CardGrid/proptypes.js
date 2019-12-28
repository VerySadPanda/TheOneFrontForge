import PropTypes from 'prop-types';
import { intlObject } from '../../proptypes';

export const gridItemType = {
    message: intlObject.isRequired,
    description: intlObject,
    icon: PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string,
};

export const gridItemShape = PropTypes.shape(gridItemType);
