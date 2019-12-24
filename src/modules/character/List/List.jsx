import { useIntl } from 'react-intl';

import messages from './messages';

const List = () => {
    const { formatMessage } = useIntl();

    return formatMessage(messages.listPlaceholder);
};

export default List;
