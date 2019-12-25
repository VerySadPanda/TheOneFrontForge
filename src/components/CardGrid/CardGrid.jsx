import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { List, Card, Icon } from 'antd';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';

import classNames from './styles.scss';

const cardSize = {
    gutter: 16,
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 4,
    xxl: 3,
};

const CardGrid = ({
    data,
    className,
    cardClassName,
}) => {
    const { formatMessage } = useIntl();
    const router = useRouter();

    const renderCard = useCallback(({
        message,
        description = '',
        icon,
        href,
    }) => {
        const title = typeof message === 'string' ? message : formatMessage(message);
        const cardDescription = typeof description === 'string' ? description : formatMessage(description);

        const titleWithIcon = (
            <>
                {
                    icon && (
                        <Icon
                            className={classNames.cardIcon}
                            type={icon}
                        />
                    )
                }

                {title}
            </>
        );

        return (
            <List.Item>
                <Card
                    onClick={() => router.push(href)} // eslint-disable-line react/jsx-no-bind
                    className={classnames(cardClassName, classNames.card, classNames.clickable)}
                    title={titleWithIcon}
                >
                    {cardDescription}
                </Card>
            </List.Item>
        );
    }, []);

    return (
        <List
            grid={cardSize}
            dataSource={data}
            renderItem={renderCard}
            className={className}
        />
    );
};

CardGrid.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    cardClassName: PropTypes.string,
    className: PropTypes.string,
};

CardGrid.defaultProps = {
    cardClassName: '',
    className: '',
    data: [],
};

export default CardGrid;
