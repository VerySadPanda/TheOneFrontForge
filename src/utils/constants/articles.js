import globalMessages from '../../messages';

const Articles = {
    CHARACTER: {
        href: '/character',
        message: globalMessages.character,
        description: globalMessages.characterDescription,
        icon: 'meh',
    },
    LOCATION: {
        href: '/location',
        message: globalMessages.location,
        description: globalMessages.locationDescription,
        icon: 'environment',
    },
    ORGANIZATION: {
        href: '/organization',
        message: globalMessages.organization,
        description: globalMessages.organizationDescription,
        icon: 'flag',
    },
    EVENT: {
        href: '/event',
        message: globalMessages.event,
        description: globalMessages.eventDescription,
        icon: 'branches',
    },
    OBJECT: {
        href: '/object',
        message: globalMessages.object,
        description: globalMessages.objectDescription,
        icon: 'gift',
    },
    CONDITION: {
        href: '/condition',
        message: globalMessages.condition,
        description: globalMessages.conditionDescription,
        icon: 'heart',
    },
    RACE: {
        href: '/race',
        message: globalMessages.race,
        description: globalMessages.raceDescription,
        icon: 'bug',
    },
    ETHNIE: {
        href: '/ethnie',
        message: globalMessages.ethnie,
        description: globalMessages.ethnieDescription,
        icon: 'bank',
    },
};
export default Articles;
