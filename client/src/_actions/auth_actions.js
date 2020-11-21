import axios from 'axios';
import queryString from 'querystring'
import {BACKEND_URL} from "../config";

export const AUTHENTICATED = 'authenticated';
export const UNAUTHENTICATED = 'unauthenticated';
export const AUTHENTICATION_ERROR = 'authentication_error';

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

export function loginUser(email, password) {
    const requestBody = {
        email,
        password
    };

    return (dispatch, state) => {
        axios.post(BACKEND_URL + "/api/users/login", queryString.stringify(requestBody), config)
            .then(response => {
                localStorage.setItem("user", response.data.token);
                dispatch({
                    type: AUTHENTICATED,
                    payload: null
                })
            })
            .catch(err => {
                console.log(err.toString());
                dispatch({
                    type: AUTHENTICATION_ERROR,
                    payload: err
                })
            })
    }
}

export function registerUser(name, email, password, password2) {
    const requestBody = {
        name,
        email,
        password,
        password2
    };

    console.log(requestBody);

    return (dispatch, state) => {
        axios.post(BACKEND_URL + "/api/users/register", queryString.stringify(requestBody), config)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
                dispatch({
                    type: AUTHENTICATION_ERROR,
                    payload: err.response.data
                })
            })
    }
}

export function authenticateUser() {
    return {
        type: AUTHENTICATED,
        payload: null
    }
}

export function logoutUser() {
    localStorage.clear();
    return {
        type: UNAUTHENTICATED,
        payload: null
    }
}