import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useIntl } from 'react-intl';

import globalMessages from '../../../../messages';

const LinkColumn = ({ id, name, baseRoute }) => {
    const { formatMessage } = useIntl();
    const displayName = name || formatMessage(globalMessages.unknown);

    if (!id) {
        return displayName;
    }

    return (
        <Link href={`${baseRoute}/${id}`}>
            <a>
                {displayName}
            </a>
        </Link>
    );
};

LinkColumn.propTypes = {
    baseRoute: PropTypes.string.isRequired,
    id: PropTypes.string,
    name: PropTypes.string,
};

LinkColumn.defaultProps = {
    id: null,
    name: null,
};

export default React.memo(LinkColumn);
