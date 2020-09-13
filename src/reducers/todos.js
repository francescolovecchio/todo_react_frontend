import {
    ADD,
    TODOS,
    TOGGLE,
    DELETE,
    LISTS
} from "../actions/actiontype";

export default function todosReducer(state =[], action) {
    console.log("state for todos:", state);

    switch (action.type) {
        case `${ADD}_FULFILLED`:
            return [
                action.payload.data.result,
                ...state
            ];
        case `${TODOS}_FULFILLED`:
            // const list = + action.payload.config.list;
            const todos = action.payload.data.result.data;
            // const success = action.payload.data.success;
            return todos;

        case `${TOGGLE}_FULFILLED`:
            {
                const result = action.payload.data.result;
                return state.map((todo) => {
                    if (todo.id !== result.id) {
                        return todo;
                    }
                    return result;
                })
            }

        case `${DELETE}_FULFILLED`:
            {
                const success = action.payload.data.success;
                if (! success) 
                    return state;
                


                return state.filter(todo => success && todo.id !== action.payload.data.result.id)
            }
        case `${LISTS}_FULFILLED`:
            return [];

        default:
            return state;
    }
}
