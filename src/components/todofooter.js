import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

export default function footer({match, filter}) {
    const todoUrl = match.url;
    const all = filter === 'ALL' ? 
        <li className='active'> {filter} </li> : 
        <li><NavLink to={todoUrl + '?filter=ALL'} activeClassName="selected"> ALL </NavLink></li>;
    const todo = filter === 'TODO' ? 
        <li className='active'> {filter} </li> : 
        <li><NavLink to={todoUrl + '?filter=TODO'} activeClassName="selected"> TODO </NavLink ></li>;
    const completed = filter === 'COMPLETED' ? 
        <li className='active'> {filter} </li> : 
        <li><NavLink to={todoUrl + '?filter=COMPLETED'} activeClassName="selected"> COMPLETED </NavLink ></li>;
    return (
    <div className="footer">
        <ul className="menu footer"> 
            {all}
            {todo}
            {completed} 
        </ul>
    </div>);
}

footer.defaultProps = {
    filter: "ALL"
}

footer.propTypes = {
    filter: PropTypes.string
}
