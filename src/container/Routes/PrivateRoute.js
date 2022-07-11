import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import isLogin from '../Utilities/IsLogin'

function PrivateRoute({component : Component, ...rest}) {
    return (
        <Route
            {...rest}
            render = { props => 

           
                isLogin() && !restricted ? 
                <Redirect to='/' /> 
                :
                <Component to={...props}
            }
            

        />
    );
}

export default PrivateRoute;