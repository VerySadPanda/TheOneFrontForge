import TextFilter from './TextFilter';
import RadioFilter from './RadioFilter';
import VisibilityStatusFilter from './VisibilityStatusFilter';

export const getFilterFromType = (type) => {
    switch (type) {
    case 'text':
        return TextFilter;

    case 'radio':
        return RadioFilter;

    case 'visibilityStatus':
        return VisibilityStatusFilter;

    default:
        // eslint-disable-next-line no-console
        console.warn(`Type ${type} not defined in filters utils. Default to 'text'`);

        return TextFilter;
    }
};

export default {
    getFilterFromType,
};
