import React from "react";
import PropTypes from "prop-types";

export default function todo({todoItem, toggleTodo, id, deleteTodo}) {
    return (
        <li onClick= {() => {toggleTodo(todoItem, !todoItem.completed)}} className={ todoItem.completed ? "completed" : "uncomplete"}>
            <span className={todoItem.completed ? "completed" : "uncomplete"}></span>
            {todoItem.todo}
            <span className = "cross" onClick= {(e) => {e.stopPropagation(); deleteTodo(id)}}></span>
        </li>
    );
}

todo.defaultProps = {
    id: 0
}

todo.propTypes = {
    todoItem : PropTypes.shape(
        {
            completed: PropTypes.number,
            todo: PropTypes.string,
            id: PropTypes.number,
        }
    ),
    toggleTodo : PropTypes.func.isRequired,
    id : PropTypes.number,
    deleteTodo : PropTypes.func.isRequired, 
}