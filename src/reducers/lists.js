import {ADD_LIST, LISTS, DELETE_LIST} from "../actions/actiontype";

export default function listsReducer(state =[], action) {
    console.log("state for Lists: ", state);

    switch (action.type) {
        case `${ADD_LIST}_FULFILLED`:
            return [
                action.payload.data.result,
                ...state
            ]

        case `${LISTS}_FULFILLED`:
            return action.payload.data.result.data;

        case `${DELETE_LIST}_FULFILLED`:
            const success = action.payload.data.success;

            if (!success) 
                return state;
            
            return state.filter(list => success && list.id !== action.payload.config.id);

        default:
            return state;
    }
}
