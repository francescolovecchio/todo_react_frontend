import React, { useState } from 'react';
import AuthMethods from '../auth/auth';

const userData = AuthMethods.getUser();
const UserDataContext = React.createContext(userData);

const UserDataProvider = (props) => {
    const [user, setUser] = useState(userData);
    return (<UserDataContext.Provider value = { [user, setUser] }>
        { props.children }
    </UserDataContext.Provider>)
}

export {UserDataProvider, UserDataContext};