import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { getTokenAdm, getTokenBand } from '../../utils/constants';

export const ProtectedUserRoute = ({ component: Component, ...rest }) => {
    const token = getTokenBand() || getTokenAdm();
    const getRedirectProps = (location) => ({
        pathname: "/login",
        from: location
    });
    
    return (
        <Route
            {...rest}
            render={props => {
                return token
                    ? (<Component {...props} />)
                    : (<Redirect to={getRedirectProps(props.location)} />)
            }}
        />
    )
}