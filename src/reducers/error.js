import {
    ADD,
    TODOS,
    TOGGLE,
    FILTER,
    DELETE} from "../actions/actiontype";

export default function storeReducer(state = {}, action) {
    console.log("state for error:", state);

    switch (action.type) {
            // REJECTED ACTIONS
        case `${ADD}_REJECTED`:
        case `${TODOS}_REJECTED`:
        case `${TOGGLE}_REJECTED`:
        case `${FILTER}_REJECTED`:
        case `${DELETE}_REJECTED`: 
        return {
                hasError: true,
                errorMessage: action.payload.message
            }
            // END REJECTED
        default:
            return {
                hasError: false,
                errorMessage: ""
            };
    }
}
