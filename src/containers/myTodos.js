import React from 'react';
import MyTodolist from "./mytodolist";
import MyAddTodo from "./addnew";
import MyTodoFooter from './mytodofooter'
import ErrorBoundary from '../components/errorBoundary';

const parseFilter = (search) => {
    if (search.indexOf('filter') === -1){
        return '';
    }
    const tokens = search.split('=');
    return tokens[1];
}

export default function myTodos(props) {
    //props.location.search
    const filterValue = parseFilter(props.location.search);
    console.log(props.match);
    const listId = props.match.params.list || 0;
    const listName = props.location.state ? props.location.state.listName : null;
    const listTitle = listName ? <h1>{listName}</h1> : null;

    return (
        <div className="container">
            {listTitle}
            <MyAddTodo list={listId}/>
            <ErrorBoundary>
                <MyTodolist list={listId} filter={filterValue}/>
            </ErrorBoundary>
            <MyTodoFooter filter={filterValue}/>
        </div>
    )
}
