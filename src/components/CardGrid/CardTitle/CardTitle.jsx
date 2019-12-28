import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import { useIntl } from 'react-intl';

import { intlObject } from '../../../proptypes';

import classNames from './styles.scss';

const CardTitle = ({ icon, title }) => {
    const { formatMessage } = useIntl();
    const displayTitle = typeof title === 'string' ? title : formatMessage(title);

    return (
        <>
            {
                icon && (
                    <Icon
                        className={classNames.cardIcon}
                        type={icon}
                    />
                )
            }

            {displayTitle}
        </>
    );
};

CardTitle.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, intlObject]).isRequired,
    icon: PropTypes.string,
};

CardTitle.defaultProps = {
    icon: null,
};

export default React.memo(CardTitle);
