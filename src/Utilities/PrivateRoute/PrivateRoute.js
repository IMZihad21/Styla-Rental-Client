import React from 'react';
import { Redirect, Route } from 'react-router';
import useProvider from '../../Hooks/useProvider';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useProvider();
    if (loading) return (
        <div>
            <h1>Loading, Please Wait..</h1>
        </div>
    );
    return (
        <Route
            {...rest}
            render={({ location }) => user.uid ?
                (children) :
                (<Redirect
                    to={{
                        pathname: "/authorization",
                        state: { from: location }
                    }}
                />)}
        />
    );
};

export default PrivateRoute;