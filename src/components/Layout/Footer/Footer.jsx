import React from 'react';
import { useIntl } from 'react-intl';

import globalMessages from 'src/messages';

import classNames from './styles.scss';

const Footer = () => {
    const { formatMessage } = useIntl();

    return (
        <div className={classNames.footer}>
            <div name="left-container" />

            <div name="right-container">
                {formatMessage(globalMessages.copyright)}
            </div>
        </div>
    );
};

export default Footer;
