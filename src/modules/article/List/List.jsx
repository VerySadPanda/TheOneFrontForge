import React from 'react';
import { useIntl } from 'react-intl';

import globalMessages from 'src/messages';

import CardGrid from '../../../components/CardGrid';
import Title from '../../../components/Title';
import Articles from '../../../utils/constants/articles';

import classNames from './styles.scss';

const articles = Object.keys(Articles).map((key) => Articles[key]);

const List = () => {
    const { formatMessage } = useIntl();

    return (
        <>
            <Title>
                {formatMessage(globalMessages.articleTitle)}
            </Title>

            <CardGrid
                data={articles}
                cardClassName={classNames.card}
            />
        </>
    );
};

export default List;
