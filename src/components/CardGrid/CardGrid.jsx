import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';

import CardGridItem from './CardGridItem';
import { gridItemShape } from './proptypes';

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
    const renderCard = useCallback((props) => (
        <CardGridItem
            className={cardClassName}
            {...props}
        />
    ), [cardClassName]);

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
    data: PropTypes.arrayOf(gridItemShape),
    cardClassName: PropTypes.string,
    className: PropTypes.string,
};

CardGrid.defaultProps = {
    cardClassName: '',
    className: '',
    data: [],
};

export default React.memo(CardGrid);
