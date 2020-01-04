import React, { useState, useCallback } from 'react';
import Head from 'next/head';
import { useIntl } from 'react-intl';

import { childrenType } from '../../proptypes';
import globalMessages from '../../messages';

import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

import classNames from './styles.scss';


const Layout = ({ children }) => {
    const { formatMessage } = useIntl();
    const [sidebarOpened, setSidebarOpened] = useState(false);

    const handleOpenSidebar = useCallback(() => setSidebarOpened(!sidebarOpened), [sidebarOpened]);
    const handleCloseSidebar = useCallback(() => setSidebarOpened(false), []);

    return (
        <div
            className={classNames.layout}
            name="main-layout"
        >
            <Head>
                <title>
                    {formatMessage(globalMessages.title)}
                </title>
            </Head>

            <Header onOpenSidebar={handleOpenSidebar} />

            <div className={classNames.mainFrame}>
                <Sidebar opened={sidebarOpened} />

                {
                    sidebarOpened && (
                        <div
                            name="sidebar-mask"
                            className={classNames.openedSidebarMask}
                            onClick={handleCloseSidebar}
                        />
                    )
                }

                <div className={classNames.body}>
                    {children}
                </div>
            </div>

            <Footer />
        </div>

    );
};

Layout.propTypes = {
    children: childrenType.isRequired,
};

export default React.memo(Layout);
