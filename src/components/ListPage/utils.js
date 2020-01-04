import messages from './messages';

export const visibilityStatusToData = {
    visible: { icon: 'eye', message: messages.visible },
    gm: { icon: 'eye-invisible', message: messages.gmOnly },
    draft: { icon: 'build', message: messages.draft },
};

export const getVisibilityStatusData = (status) => (
    visibilityStatusToData[status] || { icon: 'question', message: messages.unknown }
);
