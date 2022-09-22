import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function PrivateRoute({component: Component, isClosed, ...rest}) {
    const islogged = false;

    if(isClosed && !islogged) {
        return (
            <Navigate
            to={{pathname: 'login', state: {prePath: rest.location.pathname}}}
            />
        );
    }

return <Route {...rest} component={Component}/>;
}
PrivateRoute.defaultProps = {
    isClosed: false,
};
PrivateRoute.prototype = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
    isClosed: PropTypes.bool,
};