import {connect} from "react-redux";
import AddTodoComp from '../components/addtodo';
import {addTodo} from "../actions";

const method = {
    addTodo
}
const myaddtodo = connect(null, method)(AddTodoComp);

export default myaddtodo;
