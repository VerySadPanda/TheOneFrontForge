import React from 'react';
import { useIntl } from 'react-intl';
import Link from 'next/link';

import globalMessages from '../../../../messages';

import PandaIcon from '../PandaIcon';

import classNames from './styles.scss';

const Title = () => {
    const { formatMessage } = useIntl();

    return (
        <Link href="/">
            <a className={classNames.title}>
                <PandaIcon />

                {formatMessage(globalMessages.title)}
            </a>
        </Link>
    );
};

export default Title;
