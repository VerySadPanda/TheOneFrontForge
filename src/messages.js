import { defineMessages } from 'react-intl';

const basePath = 'global';

const messages = defineMessages({
    title: {
        id: `${basePath}.title`,
        defaultMessage: 'The One Forge',
    },
    home: {
        id: `${basePath}.home`,
        defaultMessage: 'Home',
    },
    articleTitle: {
        id: `${basePath}.article.title`,
        defaultMessage: 'Articles',
    },
    character: {
        id: `${basePath}.character`,
        defaultMessage: 'Characters',
    },
    characterDescription: {
        id: `${basePath}.location.description`,
        defaultMessage: 'Important characters for the story or in history.',
    },
    location: {
        id: `${basePath}.location`,
        defaultMessage: 'Locations',
    },
    locationDescription: {
        id: `${basePath}.location.description`,
        defaultMessage: 'Noticeable place in the world',
    },
    organization: {
        id: `${basePath}.organization`,
        defaultMessage: 'Organizations',
    },
    organizationDescription: {
        id: `${basePath}.organization.description`,
        defaultMessage: 'The countries, religions, military departments, ...',
    },
    event: {
        id: `${basePath}.event`,
        defaultMessage: 'Events',
    },
    eventDescription: {
        id: `${basePath}.event.description`,
        defaultMessage: 'Timeline events of your world.',
    },
    object: {
        id: `${basePath}.object`,
        defaultMessage: 'Objects',
    },
    objectDescription: {
        id: `${basePath}.object.description`,
        defaultMessage: 'From the magical items to vehicles. Also include materials.',
    },
    race: {
        id: `${basePath}.race`,
        defaultMessage: 'Races',
    },
    raceDescription: {
        id: `${basePath}.race.description`,
        defaultMessage: 'Race of plants, animals, insects, ...',
    },
    ethnie: {
        id: `${basePath}.ethnie`,
        defaultMessage: 'Ethnies',
    },
    ethnieDescription: {
        id: `${basePath}.ethnie.description`,
        defaultMessage: 'People from a specific country of region.',
    },
    condition: {
        id: `${basePath}.condition`,
        defaultMessage: 'Conditions',
    },
    conditionDescription: {
        id: `${basePath}.condition.description`,
        defaultMessage: 'Specific conditions such as curse, poisoning or disease.',
    },
    article: {
        id: `${basePath}.article`,
        defaultMessage: 'All',
    },
    timeline: {
        id: `${basePath}.timeline`,
        defaultMessage: 'Timeline',
    },
    copyright: {
        id: `${basePath}.copyright`,
        defaultMessage: '© All rights reserved to pandas',
    },
});

export default messages;
