import axios from 'axios';
import {API_URL_LOGIN, API_URL_LOGOUT, API_URL_SIGNUP} from '../config/config';

function Auth() {
    const isTokenExpired = () => {
        const expireDate = + localStorage.getItem('token-expires');
        const expired = (new Date()).getTime() > expireDate;

        if (expired) {
            localStorage.removeItem('auth');
            localStorage.removeItem('token-expires');
        }

        return expired;
    }

    const handleError = (response) => {
        let message = '';
        switch (+ response.status) {
            case 401: message = response.data.error;
                break;
            case 500: message = response.data.message;
                break;
            default: message = 'Error contacting server';
        }
        return message;
    }
    const addAxiosToken = () => {
        const token = getToken();
        if (token) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        }
    }
    const signin = async (email, password) => {
        try {
            const result = await axios.post(API_URL_LOGIN, {email, password});

            return manageResult(result);
        } catch (e) {
            console.log(e.response);
            return Promise.reject(handleError(e.response));
        }
    };

    const signup = async (email, name, password) => {
        try {
            const result = await axios.post(API_URL_SIGNUP, {email, name, password});
            return manageResult(result);
        } catch (e) {
            console.log(e.response);
            return Promise.reject(handleError(e.response));
        }
    };

    function manageResult(result) {
        if (! result || ! result.data || ! result.data.access_token) {
            return Promise.reject('Invalid server response');
        }

        const expireDate = (new Date()).getTime() + result.data.expires_in * 1000;
        localStorage.setItem('auth', JSON.stringify(result.data));
        localStorage.setItem('token-expires', expireDate);
        return result.data;

    }

    const logout = async () => {
        try {
            addAxiosToken();
            const result = await axios.post(API_URL_LOGOUT, {});
            localStorage.removeItem('auth');
            localStorage.removeItem('token-expires');
            return result;
        } catch (e) {
            return e;
        }
    };

    const refresh = async (email, password) => {
        try {} catch (e) {
            console.log(e);
            return e;
        }
    };

    const getToken = () => {
        const auth = JSON.parse(localStorage.getItem('auth'));
        if (auth && ! isTokenExpired()) 
            return auth.access_token;
        

        return null;
    }

    const getUser = () => {
        const auth = JSON.parse(localStorage.getItem('auth'));
        if (auth && ! isTokenExpired()) 
            return auth.user;

        return null;
    }

    return {
        signin,
        signup,
        logout,
        refresh,
        getToken,
        getUser,
        isTokenExpired
    }
}
const AuthMethods = Auth();
export default AuthMethods;
