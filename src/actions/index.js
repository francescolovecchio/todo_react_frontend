import {APIURLTODOS, APIURLFILTER} from "../config/config";
import axios from "axios";
import Auth from '../auth/auth'
import {
    ADD,
    TODOS,
    DELETE,
    TOGGLE,
    FILTER
} from "./actiontype";

export const addTodo = (todoin, list = 0) => {
    return {
        type: ADD,
        payload: axios.post(APIURLTODOS, {
            todo: todoin,
            completed: false,
            list_id: + list
        }, {
            headers: {
                Authorization: `Bearer ${
                    Auth.getToken()
                }`
            }
        })
    };
}
export const getTodos = (list = 0, filter = 'ALL') => {
    return {
        type: TODOS,
        payload: axios.get(APIURLTODOS, {
            params: {
                list_id: list,
                filter
            },
            headers: {
                Authorization: `Bearer ${
                    Auth.getToken()
                }`
            }

        })
    };
}

export const deleteTodo = (i) => {
    return {
        type: DELETE,
        payload: axios.delete(APIURLTODOS + '/' + i, {
            "id": i,
            headers: {
                Authorization: `Bearer ${
                    Auth.getToken()
                }`
            }
        })
    };
}

export const toggleTodo = (todo, value) => {
    return {
        type: TOGGLE,
        payload: axios.patch(APIURLTODOS + '/' + todo.id, {
            ...todo,
            "completed": value
        }, {
            headers: {
                Authorization: `Bearer ${
                    Auth.getToken()
                }`
            }
        })
    };
}

export const filterTodo = (filter = 'ALL') => {
    return {
        type: FILTER,
        payload: axios.post(APIURLFILTER, {
            "filter": filter
        }, {
            headers: {
                Authorization: `Bearer ${
                    Auth.getToken()
                }`
            }
        })
    };
}
