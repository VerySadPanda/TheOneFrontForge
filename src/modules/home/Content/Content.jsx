import { useIntl } from 'react-intl';

import messages from './messages';

const Content = () => {
    const { formatMessage } = useIntl();

    return formatMessage(messages.description);
};

export default Content;
