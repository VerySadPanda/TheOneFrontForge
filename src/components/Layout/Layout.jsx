import React from 'react';
import { PageHeader } from 'antd';
import { useIntl } from 'react-intl';

import { childrenType } from '../../proptypes';
import messages from './messages';

import Sidebar from './Sidebar';

import classNames from './styles.scss';

const Layout = ({ children }) => {
    const { formatMessage } = useIntl();

    return (
        <div
            className={classNames.layout}
            name="main-layout"
        >
            <PageHeader
                className={classNames.header}
                title={formatMessage(messages.title)}
            />

            <div className={classNames.mainFrame}>
                <Sidebar className={classNames.sidebar} />

                <div className={classNames.body}>
                    {children}
                </div>
            </div>

            <div className={classNames.footer} />
        </div>
    );
};

Layout.propTypes = {
    children: childrenType.isRequired,
};

export default Layout;
