import TextFilter from './TextFilter';
import RadioFilter from './RadioFilter';
import VisibilityFilter from './VisibilityFilter';

export const getFilterFromType = (type) => {
    switch (type) {
    case 'text':
        return TextFilter;

    case 'radio':
        return RadioFilter;

    case 'visibility':
        return VisibilityFilter;

    default:
        // eslint-disable-next-line no-console
        console.warn(`Type ${type} not defined in filters utils. Default to 'text'`);

        return TextFilter;
    }
};

export default {
    getFilterFromType,
};
