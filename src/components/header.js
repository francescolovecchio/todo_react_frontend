import React, { useContext } from 'react';
import {NavLink} from 'react-router-dom';
import {UserDataContext} from '../containers/logincontext';


export default function Header(){
    const [user] = useContext(UserDataContext);
    
    return (
        <header className="App-header">
            <nav>
                <ul className="menu">
                    {
                    user ? <>
                        <li>
                            <NavLink activeClassName="active" to="/lists">Lists</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/todos">All Todos</NavLink>
                        </li>
                        <li>
                            Welcome {user.name}
                            <NavLink activeClassName="active" to="/logout">Logout</NavLink>
                        </li>
                    </> : <>
                        <li>
                            <NavLink activeClassName="active" to="/signup">Sign Up</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/login">Login</NavLink>
                        </li>
                    </>
                } </ul>
            </nav>
        </header>
    );
}
