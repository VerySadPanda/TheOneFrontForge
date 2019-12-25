import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { childrenType } from 'src/proptypes';

import classNames from './styles.scss';

const Title = ({ className, children }) => (
    <h2 className={classnames(classNames.title, className)}>
        {children}
    </h2>
);

Title.propTypes = {
    children: childrenType.isRequired,
    className: PropTypes.string,
};

Title.defaultProps = {
    className: '',
};

export default Title;
