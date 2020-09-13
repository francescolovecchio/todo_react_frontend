import {APIURLLISTS} from "../config/config";
import axios from "axios";
import {LISTS, ADD_LIST, DELETE_LIST} from "./actiontype";
import Auth from '../auth/auth'

export const getLists = () => {
    return {
        type: LISTS,
        payload: axios.get(APIURLLISTS, {
            headers: {
                Authorization: `Bearer ${
                    Auth.getToken()
                }`
            }
        })
    };
}

export const addList = (name) => {
    return {
        type: ADD_LIST,
        payload: axios.post(APIURLLISTS, {
            name
        }, {
            headers: {
                Authorization: `Bearer ${
                    Auth.getToken()
                }`
            }
        })
    };
}

export const deleteList = (i) => {
    return {
        type: DELETE_LIST,
        payload: axios.delete(APIURLLISTS + '/' + i, {
            "id": i,
            headers: {
                Authorization: `Bearer ${
                    Auth.getToken()
                }`
            }
        })
    };
}
