import { connect } from 'react-redux';
import Lists from '../components/lists';
import { addList, deleteList, getLists } from '../actions/lists'


const mapStateToProps = (state) => {
    return {
        'lists': state.lists
    }
}

export default connect(mapStateToProps, {addList, deleteList, getLists})(Lists);
