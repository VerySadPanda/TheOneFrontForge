import React, { useCallback } from 'react';
import classnames from 'classnames';
import { List, Card } from 'antd';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';

import { gridItemType } from '../proptypes';

import classNames from './styles.scss';
import CardTitle from '../CardTitle/CardTitle';

const CardGridItem = ({
    message,
    description = '',
    icon,
    href,
    className,
}) => {
    const { formatMessage } = useIntl();
    const router = useRouter();
    const cardDescription = typeof description === 'string' ? description : formatMessage(description);

    const handleClick = useCallback(() => router.push(href), [href]);
    const classes = classnames(className, classNames.card, { [classNames.clickable]: !!href });

    return (
        <List.Item>
            <Card
                onClick={href ? handleClick : undefined}
                className={classes}
                title={(
                    <CardTitle
                        title={message}
                        icon={icon}
                    />
                )}
            >
                <span name="card-description">
                    {cardDescription}
                </span>
            </Card>
        </List.Item>
    );
};

CardGridItem.propTypes = gridItemType;

CardGridItem.defaultProps = {
    className: '',
    description: '',
    href: null,
    icon: null,
};

export default React.memo(CardGridItem);
