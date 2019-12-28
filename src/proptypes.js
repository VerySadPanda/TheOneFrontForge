import Proptypes from 'prop-types';

export const childrenType = Proptypes.oneOfType([
    Proptypes.node,
    Proptypes.arrayOf(Proptypes.node),
]);

export const intlObject = Proptypes.shape({
    id: Proptypes.string.isRequired,
    defaultMessage: Proptypes.string,
});
