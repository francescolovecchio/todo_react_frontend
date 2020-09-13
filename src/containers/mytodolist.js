import {connect} from "react-redux";
import TodoList from '../components/todolist';
import {toggleTodo, deleteTodo, getTodos } from '../actions'

const filterTodos = (todos = [], filter = 'ALL') => {
    switch (filter) {
        case 'TODO':
            return todos.filter(todo => !todo.completed);
        case 'COMPLETED':
            return todos.filter(todo => todo.completed);
        default:
            return todos
    }
};
const mapStateToProps = (state) => {
    return {
        ...state,
        todos: filterTodos(state.todos, state.setFilter),
    }
}

const myTodolist = connect(mapStateToProps, {toggleTodo, deleteTodo, getTodos})(TodoList);
export default myTodolist;
