import {connect} from "react-redux";
import TodoFooter from '../components/todofooter'
import {filterTodo} from "../actions";
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
    return {
        activeFilter: state.setFilter
    }
}

export default withRouter(connect(mapStateToProps, {filterTodo})(TodoFooter));
