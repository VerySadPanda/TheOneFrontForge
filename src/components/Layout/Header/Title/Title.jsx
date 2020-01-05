import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import Link from 'next/link';
import { Icon } from 'antd';

import globalMessages from '../../../../messages';

import PandaIcon from '../PandaIcon';

import classNames from './styles.scss';

const Title = ({ onOpenSidebar }) => {
    const { formatMessage } = useIntl();

    return (
        <div className={classNames.title} >
            <div
                name="menu-icon"
                className={classNames.menuIcon}
                onClick={onOpenSidebar}
            >
                <Icon type="menu" />
            </div>

            <Link href="/">
                <a>
                    <PandaIcon className={classNames.homeIcon} />

                    {formatMessage(globalMessages.title)}
                </a>
            </Link>
        </div>
    );
};

Title.propTypes = {
    onOpenSidebar: PropTypes.func.isRequired,
};

export default Title;
