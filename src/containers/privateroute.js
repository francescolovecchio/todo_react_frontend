import React, { useContext } from 'react';
import {Route, Redirect} from 'react-router';
import { UserDataContext } from '../containers/logincontext';


export default function PrivateRoute(props) {
    const [ user ] = useContext(UserDataContext)

    return user ? 
    <Route {...props}/> : 
    <Redirect to={
        {
            pathname: '/login',
            state: {
                from: props.location.pathname
            }
        }
    }/>
}
