import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'antd';
import { FormattedMessage } from 'react-intl';

import Layout from '../src/components/Layout';

import { getStatusErrorMessage } from '../src/utils/client/error';

class Error extends PureComponent {
    static async getInitialProps({ res, err }) {
        const { statusCode = 404 } = res || err || {};

        return { statusCode };
    }

    static propTypes = {
        statusCode: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
        ]).isRequired,
    }

    render() {
        const { statusCode } = this.props;

        return (
            <Layout>
                <Alert
                    message={statusCode}
                    description={<FormattedMessage {...getStatusErrorMessage(statusCode)} />}
                    type="error"
                    showIcon
                />
            </Layout>
        );
    }
}

export default Error;
