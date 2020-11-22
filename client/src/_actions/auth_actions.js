import axios from 'axios';
import queryString from 'querystring'
import {BACKEND_URL} from "../config";
import client from "../utils/http/axiosWrapper";

export const AUTHENTICATED = 'authenticated';
export const UNAUTHENTICATED = 'unauthenticated';
export const AUTHENTICATION_ERROR = 'authentication_error';

export const LOGIN_USER = 'login_user';
export const REGISTER_USER = 'register_user';
export const AUTH_USER = 'auth_user';
export const LOGOUT_USER = 'logout_user';

export function loginUser(email, password) {

    const requestBody = {
        email,
        password
    };

    return (dispatch, state) => {
        client("api/users/login", {body: requestBody})
            .then(response => {
                localStorage.setItem("token", response.data.token);
                dispatch({
                    type: AUTHENTICATED,
                    payload: response.data.user
                })
            })
            .catch(err => {
                console.log(err.toString());
                dispatch({
                    type: AUTHENTICATION_ERROR,
                    payload: err
                })
            });
    }
}

export function registerUser(name, email, password, password2) {

    const requestBody = {
        name,
        email,
        password,
        password2
    };

    return (dispatch, state) => {
        client("api/users/register", {body: requestBody})
            .then(response => {
                console.log(response.data);
                dispatch({
                    type: AUTHENTICATED,
                    payload: response.data.user
                })
            })
            .catch(err => {
                dispatch({
                    type: AUTHENTICATION_ERROR,
                    payload: err.response.data
                })
            });
    }
}

export function authUser(token) {

    return (dispatch) => {
        return client("api/users/auth", {}, token)
            .then(response => {
                console.log(response);
                //TODO auth and complete profile info
                dispatch({
                    type: AUTHENTICATED,
                    payload: response.data.user
                });
                return response
            })
            .catch(err => {
                err.isAuth = false;
                dispatch({
                    type: UNAUTHENTICATED,
                    payload: null
                });
                return err
            })
    }
}

export function logoutUser() {
    localStorage.clear();
    return {
        type: UNAUTHENTICATED,
        payload: null
    }
}