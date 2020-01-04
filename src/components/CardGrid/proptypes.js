import PropTypes from 'prop-types';
import { intlObject } from '../../proptypes';

export const gridItemType = {
    message: PropTypes.oneOfType([intlObject, PropTypes.string]).isRequired,
    description: PropTypes.oneOfType([intlObject, PropTypes.string]),
    icon: PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string,
};

export const gridItemShape = PropTypes.shape(gridItemType);
