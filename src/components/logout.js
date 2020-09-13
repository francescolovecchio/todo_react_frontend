import {useEffect, useContext} from 'react';
import Auth from '../auth/auth';
import {UserDataContext} from '../containers/logincontext';

export default function Logout (props) {
    const [, setUser] = useContext(UserDataContext);
    useEffect(() => {
        Auth.logout().then(() => {
            setUser(null);
            props.history.push('/');
        });
    }, [setUser, props.history]);
    return null;
};