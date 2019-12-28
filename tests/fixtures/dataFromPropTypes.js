import PropTypes from 'prop-types';
import faker from 'faker';

const generateStringData = (key, seed) => {
    switch (key) {
    case 'id':
    case 'uuid':
        return faker.random.uuid(seed);
    case 'name':
    case 'userName':
        return faker.name.findName(seed);
    case 'email':
        return faker.internet.email(seed);
    case 'href':
    case 'url':
        return faker.internet.url(seed);
    case 'description':
        return faker.lorem.sentence(seed);
    case 'className':
        return `test-class-name-${faker.lorem.word(seed)}`;
    default:
        return faker.lorem.word(seed);
    }
};

/**
 * Attempt to generate data form the proptypes directly
 *
 * @param {string} key proptype key
 * @param {object} proptypes component proptype
 * @param {number} seed data generation seed for data. Default to 1
 *
 * @return {object} test data for the type
 */
const dataFromPropTypes = (key, proptypes, seed = 1) => {
    switch (proptypes) {
    case PropTypes.string:
        return generateStringData(key, seed);

    case PropTypes.number:
        return faker.random.number;

    case PropTypes.boolean:
        return faker.random.boolean;

    default:
        break;
    }
};

export default dataFromPropTypes;
