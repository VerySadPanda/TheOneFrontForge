import PropTypes from 'prop-types';

export const filterOptionsType = PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.node.isRequired,
}));

export const filtersType = PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.node.isRequired,
    type: PropTypes.string.isRequired,
    options: filterOptionsType,
    span: PropTypes.number,
    disabled: PropTypes.bool,
}));
