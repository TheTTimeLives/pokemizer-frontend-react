import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import  { AuthContext } from './AuthContext';

const withAuth = (Component) => {
    const AuthenticatedComponent = (props) => {
        const { isAuthenticated } = useContext(AuthContext);

        if(!isAuthenticated) {
            return <Redirect />
        }

        return <Component {...props} />
    }

    return AuthenticatedComponent;
}

export default withAuth;