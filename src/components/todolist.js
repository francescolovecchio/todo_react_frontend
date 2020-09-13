import React, { Component } from 'react';
import Todo from './todo';
import PropTypes from 'prop-types'

export default class todoList extends Component{
    constructor(props){
        super(props);
        if (props.error.hasError) {
            throw new Error(props.error.errorMessage);
        }
    
    }
    componentDidMount(){
        this.props.getTodos(this.props.list, this.props.filter);
    }

    componentDidUpdate(prevProp){
        if(this.props.list !== prevProp.list || this.props.filter !== prevProp.filter){
            this.props.getTodos(this.props.list, this.props.filter);
        }
    }

    render () {
    return (
        <ul className="todos"> {
            this.props.todos.map((todo, i) => {
                return <Todo key={todo.id}
                    id={todo.id}
                    todoItem={todo}
                    {...this.props}
                    />
            })
        } </ul>
    );}
}

todoList.propTypes = {
    props : PropTypes.shape({
        hasError: PropTypes.bool,
        errorMessage: PropTypes.string,
        todos: PropTypes.array
    })
}