import {FILTER, ADD} from "../actions/actiontype";

export default function setFilterReducer(state = 'ALL', action) {
    console.log("state for filter:", state);

    switch (action.type) {
        case `${ADD}_FULFILLED`:
            if (state === 'COMPLETED') {
                return 'ALL';
            }
            return state;
        case `${FILTER}_FULFILLED`:
            return action.payload.data.filter
        default:
            return state;
    }
}
