import React from 'react';
import { Route, Redirect } from "react-router-dom";

export const ProtectedAdmRoute = ({ component: Component, ...rest }) => {
    const tokenAdm = window.localStorage.getItem("tokenAdm");
    const getRedirectProps = (location) => ({
        pathname: "/login",
        from: location
    });
    
    return (
        <Route
            {...rest}
            render={props => {
                return tokenAdm
                    ? (<Component {...props} />)
                    : (<Redirect to={getRedirectProps(props.location)} />)
            }}
        />
    )
}