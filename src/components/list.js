import React from 'react';
import {Link} from 'react-router-dom';

export default(props) => {
    return (
        <li>
            <Link to={
                {
                    pathname: '/lists/' + props.id + '/todos',
                    state: {
                        listName: props.List.name
                    }
                }
            }>
                {
                props.List.name
            }</Link>
            <span className="cross"
                onClick={
                    (evt) => {
                        evt.stopPropagation();
                        props.deleteList(props.id)
                    }
            }></span>
    </li>
    );
}
