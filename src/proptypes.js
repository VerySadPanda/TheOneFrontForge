import Proptypes from 'prop-types';

export const childrenType = Proptypes.oneOfType([
    Proptypes.node,
    Proptypes.arrayOf(Proptypes.node),
]);

export default {
    childrenType,
};
